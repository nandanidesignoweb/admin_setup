<div class="m-grid__item m-grid__item--fluid m-wrapper">
    <div class="m-content">
    <div class="error_msg" id="error_msg"></div>
        <div class="row">
            <div class="col-xl-3 col-lg-4">
                <div class="m-portlet m-portlet--full-height  ">
                    <div class="m-portlet__body">
                        <div class="m-card-profile">
                            <div class="m-card-profile__title m--hide">
                                Your Profile
                            </div>
                            <div class="m-card-profile__pic">
                                <div class="m-card-profile__pic-wrapper">
                                    <?php if(!empty($admin_detail['image_url'])){?>
                                        <img src="<?php echo base_url('assets/admin/profilePic/'.$admin_detail['image_url'])?>" alt="" />
                                    <?php }else{?>
                                        <img src="<?php echo base_url('assets/admin/profilePic/profile_icon.png')?>" alt="" />
                                    <?php }?>
                                </div>
                            </div>
                            <div class="m-card-profile__details">
                                <span class="m-card-profile__name"><?php echo $admin_detail['name'];?></span>
                                <a href="" class="m-card-profile__email m-link"><?php echo $admin_detail['email'];?></a>
                            </div>
                        </div>
                        <ul class="m-nav m-nav--hover-bg m-portlet-fit--sides">
                            <li class="m-nav__separator m-nav__separator--fit"></li>
                            <li class="m-nav__section m--hide">
                                <span class="m-nav__section-text">Section</span>
                            </li>
                            <li class="m-nav__item">
                                <a href="<?php echo base_url('admin/profile')?>" class="m-nav__link">
                                    <i class="m-nav__link-icon flaticon-profile-1"></i>
                                    <span class="m-nav__link-title">
                                        <span class="m-nav__link-wrap">
                                            <span class="m-nav__link-text">My Profile</span>
                                            <span class="m-nav__link-badge"><span class="m-badge m-badge--success">2</span></span>
                                        </span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div class="m-portlet__body-separator"></div>
                    </div>
                </div>
            </div>
           
            <div class="col-xl-9 col-lg-8">
                <div class="m-portlet m-portlet--full-height m-portlet--tabs  ">
                    <div class="m-portlet__head">
                        <div class="m-portlet__head-tools">
                            <ul class="nav nav-tabs m-tabs m-tabs-line   m-tabs-line--left m-tabs-line--primary" role="tablist">
                                <li class="nav-item m-tabs__item">
                                    <a class="nav-link m-tabs__link active" data-toggle="tab" href="#m_user_profile_tab_1" role="tab">
                                        <i class="flaticon-share m--hide"></i>
                                        Update Profile
                                    </a>
                                </li>
                                <li class="nav-item m-tabs__item">
                                    <a class="nav-link m-tabs__link" data-toggle="tab" href="#m_user_profile_tab_2" role="tab">
                                        Change Password
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="tab-content">
                        <div class="tab-pane active" id="m_user_profile_tab_1">
                            <form class="m-form m-form--fit m-form--label-align-right" method="post" id="image-common-form" 
                            action="<?php echo base_url('admin/updateProfile');?>" enctype="multipart/form-data">
                                <div class="m-portlet__body">
                                    <div class="form-group m-form__group m--margin-top-10 m--hide">
                                        <div class="alert m-alert m-alert--default" role="alert">
                                            The example form below demonstrates common HTML form elements that receive updated styles from Bootstrap with additional classes.
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <div class="col-10 ml-auto">
                                            <h3 class="m-form__section">1. Personal Details</h3>
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <label for="example-text-input" class="col-2 col-form-label">Full Name</label>
                                        <div class="col-7">
                                            <input class="form-control m-input" type="text" value="<?php echo $admin_detail['name'];?>" name="name">
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <label for="example-text-input" class="col-2 col-form-label">Email</label>
                                        <div class="col-7">
                                            <input class="form-control m-input" type="text" value="<?php echo $admin_detail['email'];?>" name="email" readonly>
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <label for="example-text-input" class="col-2 col-form-label">Phone No.</label>
                                        <div class="col-7">
                                            <input class="form-control m-input" type="tel" value="<?php echo $admin_detail['mobile'];?>" name="mobile">
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <label for="example-text-input" class="col-2 col-form-label">Profile Image</label>
                                        <div class="col-7">
                                            <input class="form-control m-input" type="file"  name="image_url">
                                        </div>
                                    </div>
                                    <div class="m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x"></div>
                                    <!-- <div class="form-group m-form__group row">
                                        <div class="col-10 ml-auto">
                                            <h3 class="m-form__section">3. Social Links</h3>
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <label for="example-text-input" class="col-2 col-form-label">Linkedin</label>
                                        <div class="col-7">
                                            <input class="form-control m-input" type="text" value="www.linkedin.com/Mark.Andre">
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <label for="example-text-input" class="col-2 col-form-label">Facebook</label>
                                        <div class="col-7">
                                            <input class="form-control m-input" type="text" value="www.facebook.com/Mark.Andre">
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <label for="example-text-input" class="col-2 col-form-label">Twitter</label>
                                        <div class="col-7">
                                            <input class="form-control m-input" type="text" value="www.twitter.com/Mark.Andre">
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <label for="example-text-input" class="col-2 col-form-label">Instagram</label>
                                        <div class="col-7">
                                            <input class="form-control m-input" type="text" value="www.instagram.com/Mark.Andre">
                                        </div>
                                    </div> -->
                                </div>
                                <div class="m-portlet__foot m-portlet__foot--fit">
                                    <div class="m-form__actions">
                                        <div class="row">
                                            <div class="col-2">
                                            </div>
                                            <div class="col-7">
                                                <button type="submit" class="btn btn-accent m-btn m-btn--air m-btn--custom">Save changes</button>&nbsp;&nbsp;
                                                <button type="reset" class="btn btn-secondary m-btn m-btn--air m-btn--custom">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane " id="m_user_profile_tab_2">
                        <form class="m-form m-form--fit m-form--label-align-right" id="common-form" method="post"
                         action="<?php echo base_url('admin/changePassword');?>">
                                <div class="m-portlet__body">
                                    <div class="form-group m-form__group m--margin-top-10 m--hide">
                                        <div class="alert m-alert m-alert--default" role="alert">
                                            The example form below demonstrates common HTML form elements that receive updated 
                                            styles from Bootstrap with additional classes.
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <div class="col-10 ml-auto">
                                            <h3 class="m-form__section">1. Change Password</h3>
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <label for="old_password" class="col-2 col-form-label">Old Password</label>
                                        <div class="col-6">
                                            <input class="form-control m-input" type="password" id="old_password" name="old_password" placeholder="Old Password">
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <label for="new_password" class="col-2 col-form-label">New Password</label>
                                        <div class="col-6">
                                            <input class="form-control m-input" type="password" id="new_password" name="new_password" placeholder="New Password">
                                        </div>
                                    </div>
                                    <div class="form-group m-form__group row">
                                        <label for="confirm_new_password" class="col-2 col-form-label">Confirm Password</label>
                                        <div class="col-6">
                                            <input class="form-control m-input" type="password" id="confirm_new_password" name="confirm_new_password" placeholder="Confirm Password">
                                        </div>
                                    </div>
                                    <div class="m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x"></div>
                                </div>
                                <div class="m-portlet__foot m-portlet__foot--fit">
                                    <div class="m-form__actions">
                                        <div class="row">
                                            <div class="col-2">
                                            </div>
                                            <div class="col-7">
                                                <button type="submit" class="btn btn-accent m-btn m-btn--air m-btn--custom">Save changes</button>
                                                &nbsp;&nbsp;
                                                <button type="reset" class="btn btn-secondary m-btn m-btn--air m-btn--custom">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
