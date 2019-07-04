<?php
/*
Plugin Name: 	HH-Prog Modal
Description:	Плагин служит для открытия фонового изображения блока в модальном окне. Добавьте к блоку с фоновым изображением CSS-класс "hhp-modal" и при нажатии на этот блок откроется модальное окно с вашим изображением. Плагин требует подключение библиотеки jQuery.
Author: 		Igor Tulupov
Version: 		1.0
*/

add_action( 'wp_enqueue_scripts', 'load_hh_prog_modal' );

function load_hh_prog_modal() {
	wp_enqueue_style( 'hh-prog-modal', plugins_url('hh-prog-modal/hh-prog-modal.css') );
    wp_enqueue_script( 'hh-prog-modal', plugins_url('hh-prog-modal/hh-prog-modal.js'), array('jquery'), '1', true );
}