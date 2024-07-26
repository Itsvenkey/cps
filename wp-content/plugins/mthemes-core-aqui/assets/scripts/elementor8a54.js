jQuery(document).ready(function($) {
  'use strict';

  /**
   * Mega Menu Calculation
   */
  function calculateMegaMenu() {
    $('.elementor-widget-mthemes-nav-menu').each(function() {
      var $menu = $(this);

      var $navHolder = $menu.find('.m-nav-menu--holder');
      var $subMenu = $navHolder.find('.m-mega-menu > .sub-menu');
      var $elementorContainer = $menu.parents('.elementor-container');

      var columnPadding = parseInt(
        $menu.parents('.elementor-column-wrap').css('padding')
      );

      var containerOffset = $elementorContainer.offset().left;
      var subMenuOffset = $navHolder.offset().left;

      var width = $elementorContainer.outerWidth() - columnPadding * 2;
      var offset = containerOffset - subMenuOffset + columnPadding;

      $subMenu.css({
        width: width,
        left: offset
      });
    });
  }

  /**
   * Mobile Menu Calculation
   */
  function calculateMobileMenu() {
    $('.m-nav-menu--stretch.elementor-widget-mthemes-nav-menu').each(function() {
      var $menu = $(this);

      var $navHolder = $menu.find('.m-nav-menu--mobile-holder');
      var $mobileMenu = $navHolder.find('.m-nav-menu--mobile');
      var $elementorContainer = $menu.parents('.elementor-container');

      var columnPadding = parseInt(
        $menu.parents('.elementor-column-wrap').css('padding')
      );

      var containerOffset = $elementorContainer.offset().left;
      var mobileMenuOffset = $navHolder.offset().left;

      var width = $elementorContainer.outerWidth() - columnPadding * 2;
      var offset = containerOffset - mobileMenuOffset + columnPadding;

      $mobileMenu.css({
        width: width,
        left: offset
      });
    });
  }

  function mthemesHamburgerMenu() {
    $('.elementor-widget-mthemes-nav-menu').each(function() {
      var $menu = $(this);

      $menu
        .find('.m-nav-menu--mobile-holder .m-nav-menu--mobile-icon')
        .on('click', function(e) {
          e.stopPropagation();
          e.preventDefault();

          $menu
            .find('.m-nav-menu--mobile-holder .m-nav-menu--mobile')
            .toggleClass('active');

          $menu
            .find(
              '.m-nav-menu--mobile-holder .m-nav-menu--mobile .menu-item-has-children > .menu-item-icon'
            )
            .removeClass('active');

          $menu
            .find('.m-nav-menu--mobile-holder .m-nav-menu--mobile')
            .find('.sub-menu')
            .slideUp('fast');
        });
    });
  }

  function removeHiddenSections() {
    var $mthemes_fixed = $('.mthemes-fixed-yes');
    if (
      $mthemes_fixed.is('.elementor-hidden-tablet') &&
      $(window).width() > 730 &&
      $(window).width() < 1025
    ) {
      $mthemes_fixed.hide();
    } else if (
      $mthemes_fixed.is('.elementor-hidden-phone') &&
      $(window).width() < 730
    ) {
      $mthemes_fixed.hide();
    } else {
      $mthemes_fixed.show();
    }
  }

  removeHiddenSections();
  calculateMegaMenu();
  calculateMobileMenu();
  mthemesHamburgerMenu();

  $(window).on('resize', function() {
    removeHiddenSections();
    calculateMegaMenu();
    calculateMobileMenu();
  });
});
