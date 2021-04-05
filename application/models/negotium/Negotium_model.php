<?php

class Negotium_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function addFeedback(){
        $data=array(
            'name'=>$this->input->post('name'),
            'email'=>$this->input->post('emailAddr'),
            'company'=>$this->input->post('company'),
            'feedback'=>$this->input->post('feedback'),
        );
        // print_r($data);

        $this->db->insert('feedback',$data);
        $id=$this->db->insert_id();
        $sel=$this->db->get_where('feedback',['feedback_id '=>$id]);
        echo $this->db->last_query();
        return $sel->row_array();
    }
}