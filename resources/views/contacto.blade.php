@extends('template.master')
@section('content')
    <aside id="fh5co-hero">
        <div class="flexslider">
            <ul class="slides short">
                <li style="background:center center url(images/img/a8.jpg);">
                    <div class="overlay-gradient"></div>
                    <div class="container">
                        <div class="col-md-10 col-md-offset-1 text-center slider-text">
                            <div class="slider-text-inner desc">
                                <h2 class="heading-section">Contáctenos</h2>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
    <!-- END map -->
    <div id="fh5co-contact-section">
        <div class="container">
            <form action="#">
                <div class="row">
                    <div class="col-md-6 col-md-push-6">
                        <h3 class="section-title">Información</h3>
                        <p>Nos comprometemos a ofrecer un servicio al cliente excepcional. Para consultas, asesoramiento o
                            cotizaciones, utilice nuestro formulario en línea, llámenos al <i
                                class="icon-telephone"></i>+569 84779110 o a través de WhatsApp <i
                                class="icon-whatsapp"></i>.</p>
                        <ul class="contact-info">
                            <li><i class="icon-location-pin"></i>Rancagua, Región del Libertador Bernardo O'Higgins</li>
                            <li><i class="icon-phone2"></i>+569 84779110</li>
                            <li><i class="icon-mail"></i><a href="#">contacto@ssco.cl</a></li>
                            <li><i class="icon-globe2"></i><a href="#">www.sscom.cl</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-md-pull-6">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Nombre">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Telefono">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Email">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea name="" class="form-control" id="" cols="30" rows="7" placeholder="Mensaje"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="submit" value="Enviar" class="btn btn-primary">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div id="map" class="fh5co-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d74704.56993617912!2d-70.75666803226791!3d-34.15895938254185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1715048818649!5m2!1ses!2scl"
            width="100%" height="100%" style="border:0;" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
@endsection
