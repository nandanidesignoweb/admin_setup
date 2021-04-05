<div class="m-grid__item m-grid__item--fluid m-wrapper">
        <!-- END: Subheader -->
        <div class="m-content">
            <div class="m-portlet m-portlet--mobile">
                <div class="m-portlet__head">
                    <div class="m-portlet__head-caption">
                        <div class="m-portlet__head-title">
                            <h3 class="m-portlet__head-text">
                                Module Name
                            </h3>
                        </div>
                    </div>
                    <div class="m-portlet__head-tools">
                        <ul class="m-portlet__nav">
                            <li class="m-portlet__nav-item">
                                <a href="#" class="btn btn-danger m-btn m-btn--custom m-btn--icon m-btn--air" data-toggle="modal" data-target="#m_modal_4">
                                    <span>
                                        <i class="la la-cart-plus"></i>
                                        <span>Add</span>
                                        <!-- <button type="button"  class="btn btn-warning" data-toggle="modal" data-target="#m_modal_4">Launch Modal</button> -->
                                    </span>
                                </a>
                            </li>
                            <li class="m-portlet__nav-item"></li>
                            <li class="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
                                <a href="#" class="m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand">
                                    Actions
                                </a>
                                <div class="m-dropdown__wrapper" style="z-index: 101;">
                                    <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style="left: auto; right: 36px;"></span>
                                    <div class="m-dropdown__inner">
                                        <div class="m-dropdown__body">
                                            <div class="m-dropdown__content">
                                                <ul class="m-nav">
                                                    <li class="m-nav__section m-nav__section--first">
                                                        <span class="m-nav__section-text">Export Tools</span>
                                                    </li>
                                                    <li class="m-nav__item">
                                                        <a href="#" class="m-nav__link" id="export_print">
                                                            <i class="m-nav__link-icon la la-print"></i>
                                                            <span class="m-nav__link-text">Print</span>
                                                        </a>
                                                    </li>
                                                    <li class="m-nav__item">
                                                        <a href="#" class="m-nav__link" id="export_copy">
                                                            <i class="m-nav__link-icon la la-copy"></i>
                                                            <span class="m-nav__link-text">Copy</span>
                                                        </a>
                                                    </li>
                                                    <li class="m-nav__item">
                                                        <a href="#" class="m-nav__link" id="export_excel">
                                                            <i class="m-nav__link-icon la la-file-excel-o"></i>
                                                            <span class="m-nav__link-text">Excel</span>
                                                        </a>
                                                    </li>
                                                    <li class="m-nav__item">
                                                        <a href="#" class="m-nav__link" id="export_csv">
                                                            <i class="m-nav__link-icon la la-file-text-o"></i>
                                                            <span class="m-nav__link-text">CSV</span>
                                                        </a>
                                                    </li>
                                                    <li class="m-nav__item">
                                                        <a href="#" class="m-nav__link" id="export_pdf">
                                                            <i class="m-nav__link-icon la la-file-pdf-o"></i>
                                                            <span class="m-nav__link-text">PDF</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="m-portlet__body">
                    <!--begin: Datatable -->
                    <table class="table table-striped- table-bordered table-hover table-checkable" id="m_table_2">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Country</th>
                                <th>Ship City</th>
                                <th>Ship Address</th>
                                <th>Company Agent</th>
                                <th>Company Name</th>
                                <th>Status</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>61715-075</td>
                                <td>China</td>
                                <td>Tieba</td>
                                <td>746 Pine View Junction</td>
                                <td>Nixie Sailor</td>
                                <td>Gleichner, Ziemann and Gutkowski</td>
                                <td>3</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>0404-0360</td>
                                <td>Colombia</td>
                                <td>San Carlos</td>
                                <td>38099 Ilene Hill</td>
                                <td>Freida Morby</td>
                                <td>Haley, Schamberger and Durgan</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>52125-267</td>
                                <td>Thailand</td>
                                <td>Maha Sarakham</td>
                                <td>8696 Barby Pass</td>
                                <td>Obed Helian</td>
                                <td>Labadie, Predovic and Hammes</td>
                                <td>1</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>54092-515</td>
                                <td>Brazil</td>
                                <td>Canguaretama</td>
                                <td>32461 Ridgeway Alley</td>
                                <td>Sibyl Amy</td>
                                <td>Treutel-Ratke</td>
                                <td>4</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="m_modal_4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="recipient-name" class="form-control-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="form-control-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send message</button>
            </div>
        </div>
    </div>
</div>