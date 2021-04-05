<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Negotium extends CI_Controller {

	public function __construct() 
	{
        parent::__construct();
        $this->load->model('negotium/negotium_model');
    }

	public function loadview($loadview,$data=NULL){
		$this->load->view('negotium/common/header',$data);
		$this->load->view('negotium/'.$loadview);
		$this->load->view('negotium/common/footer');
    }

	public function index()
	{
        $this->loadview('index');
	}

	public function addFeedback(){
		$this->output->set_content_type('application/json');
        $this->form_validation->set_rules('name', 'Name', 'required');
        $this->form_validation->set_rules('emailAddr', 'Email Address', 'required');
        $this->form_validation->set_rules('company', 'Company', 'required');
		$this->form_validation->set_rules('storePermission', 'Store Permission', 'required');

        if ($this->form_validation->run() === FALSE) {
            $this->output->set_output(json_encode(['result' => 0, 'errors' => $this->form_validation->error_array()]));
            return FALSE;
        }
		if(empty($this->input->post('feedback'))){
			$this->output->set_output(json_encode(['result' => 0, 'errors' => 'The Feedback Field is required ']));
            return FALSE;
		}

		$this->negotium_model->addFeedback();
		
	}
}
