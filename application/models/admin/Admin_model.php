<?php

class Admin_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function checkLogin() {
        $data = array(
            'email' => $this->security->xss_clean($this->input->post('email')),
            'password' => $this->security->xss_clean($this->input->post('password'))
        );
        $query = $this->db->get_where('admin',$data);
        return $query->row_array();
    }

    public function getAdminDetail($admin_id) {
        $query = $this->db->get_where('admin', ['admin_id' => $admin_id]);
        return $query->row_array();
    }

    public function updateProfile($admin_id, $image_url) {
        $data = array(
            'name' => $this->security->xss_clean($this->input->post('name')),
            'image_url' => $image_url,
            'mobile'=>$this->security->xss_clean($this->input->post('mobile')),
        );
        $this->db->update('admin', $data, ['admin_id' => $admin_id]);
        return $this->db->affected_rows();
    }

    public function do_check_oldpassword($admin_id) {
        $oldpassword = $this->security->xss_clean($this->input->post('old_password'));
        $query = $this->db->get_where('admin', ['admin_id' => $admin_id, 'password' => $oldpassword]);
        return $query->row_array();
    }

    public function do_reset_passowrd($admin_id) {
        $newpassword = $this->security->xss_clean($this->input->post('new_password'));
        $this->db->update('admin', ['password' => $newpassword], ['admin_id' => $admin_id]);
        return $this->db->affected_rows();
    }

    
}