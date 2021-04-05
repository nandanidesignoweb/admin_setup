<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

	public function __construct() 
	{
        parent::__construct();
        $this->load->model('admin/admin_model');
    }
	public function loadview($loadview,$data=NULL){
		$this->load->view('admin/common/header',$data);
		$this->load->view('admin/'.$loadview);
		$this->load->view('admin/common/footer');
    }

    public function dashboard_loadview($loadview,$data=NULL){
		$admin_id=$this->session->userdata('admin_id');
		$data['admin_detail']=$this->admin_model->getAdminDetail($admin_id);
		$this->load->view('admin/common/header',$data);
		$this->load->view('admin/common/sidebar',$data);
		$this->load->view('admin/'.$loadview);
		$this->load->view('admin/common/footer');
    }
	private  function is_login(){
		$admin_id=$this->session->userdata('admin_id');
		if(empty($admin_id)){
			redirect('admin/login');
		}else{
			return $admin_id;
		}
    }
	public function doUploadImage($path,$file_name) {
        $config = array(
            'upload_path'   => $path,
            'allowed_types' => "jpeg|jpg|png|pdf",
            'file_name'     => rand(11111, 99999),
            'max_size'      => "3072"
        );
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if ($this->upload->do_upload($file_name)) {
            $data = $this->upload->data();
            return $data['file_name'];
        } else {
            return $this->upload->display_errors();
        }
    }

	public function index(){
		$this->is_login();
		$this->dashboard_loadview('dashboard');
	}

	public function login(){
		$this->load->view('admin/login');
	}

	public function check_login(){
		$this->output->set_content_type('application/json');
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
        $this->form_validation->set_rules('password', 'Password', 'required|min_length[6]');
        if ($this->form_validation->run() === FALSE) {
            $this->output->set_output(json_encode(['result' => 0, 'errors' => $this->form_validation->error_array()]));
            return FALSE;
        }
        $result = $this->admin_model->checkLogin();
        if ($result) {
            $this->session->set_userdata('admin_id', $result['admin_id']);
            $this->output->set_output(json_encode(['result' => 1, 'url' => base_url('admin'), 'msg' => 'Loading!! Please Wait']));
            return FALSE;
        } else {
            $this->output->set_output(json_encode(['result' => -1, 'msg' => 'Invalid username or password']));
            return FALSE;
		}
	}

	public function profile(){
		$admin_id=$this->is_login();
		$data['admin_detail']=$this->admin_model->getAdminDetail($admin_id);
		$this->dashboard_loadview('profile',$data);
	}

	public function updateProfile() {
		$admin_id=$this->is_login();

		$this->output->set_content_type('application/json');
        $this->form_validation->set_rules('name', 'First Name', 'required');

        if ($this->form_validation->run() === FALSE) {
            $this->output->set_output(json_encode(['result' => 0, 'errors' => $this->form_validation->error_array()]));
            return FALSE;
        }

		if (!empty($_FILES['image_url']['name'])) {
			$path = "assets/admin/profilePic";
			$file_name ="image_url";
            $image_url = $this->doUploadImage($path,$file_name);
            if (empty($image_url)) {
                $this->output->set_output(json_encode(['result' => 0, 'errors' => $this->session->userdata('error')]));
                $this->session->unset_userdata('error');
                return FALSE;
            }
        } else {
            $admin = $this->admin_model->getAdminDetail($admin_id);
            $image_url = $admin['image_url'];
        }
        $result=$this->admin_model->updateProfile($admin_id,$image_url);
		if ($result) {
            $this->output->set_output(json_encode(['result' => 1, 'msg' => 'Profile Updated Succesfully!!','url' => base_url('admin/profile')]));
            return FALSE;
        } else {
            $this->output->set_output(json_encode(['result' => -1, 'msg' => 'Something Went Wrong']));
            return FALSE;
		}
    }

	public function logout(){
        $admin_id=$this->is_login();
        $this->session->unset_userdata('admin_id');
        redirect('admin');
	}

	public function changePassword(){
		$admin_id=$this->is_login();
        $this->output->set_content_type('application/json');
        $this->form_validation->set_rules('old_password', 'Old Password', 'required');
        $this->form_validation->set_rules('new_password', 'New Password', 'required');
        $this->form_validation->set_rules('confirm_new_password', 'Confirm Password', 'required');
        if ($this->form_validation->run() === FALSE) {
            $this->output->set_output(json_encode(['result' => 0, 'errors' => $this->form_validation->error_array()]));
            return FALSE;
        }
        $result = $this->admin_model->do_check_oldpassword($admin_id);

        if (!empty($result)) {
			if($this->input->post('new_password')==$this->input->post('confirm_new_password')){
				$changed = $this->admin_model->do_reset_passowrd($admin_id);
				if ($changed) {
					$this->output->set_output(json_encode(['result' => 1, 'url' => base_url('admin/dashboard'), 'msg' => 'Password successfully changed.!']));
					return FALSE;
				}else{
					$this->output->set_output(json_encode(['result' => -1, 'msg' => 'Password did not changed successfully!']));
					return FALSE;
				}
			}else{
				$this->output->set_output(json_encode(['result' => -1, 'msg' => 'New password and Confirm Password should be same!']));
            	return FALSE;
			}
        } else {
            $this->output->set_output(json_encode(['result' => -1, 'msg' => 'Old password did not matched current password!']));
            return FALSE;
        }
    }

    public function feedback(){
        $admin_id=$this->is_login();
        $this->dashboard_loadview('feedback-listing');
    }

	public function form1()
	{
		$this->dashboard_loadview('form1');
	}
	public function form2()
	{
		$this->dashboard_loadview('form2');
	}


}


