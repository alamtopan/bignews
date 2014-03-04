<div id="FixWrapper">
    <nav id="qcPriNav">
      <div class="qcContainer"> 
        <?php
          wp_nav_menu( array( 
          'menu'              => 'header-menu', 
          'menu_class'        => 'sf-menu', 
          'menu_id'           => 'PriNavList',
          'theme_location' => 'header_menu') 
          ); ?>
        <select id="dd-menu" class="drop-menu"></select>
      </div>  
    </nav>
    <section id="qcSubBar" class="qcContainer">
      <span class="label label-info">NEWS TREND</span>
      <ul id="qcNewsTicker">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>At facere ut recusandae laborum non culpa eaque possimus.</li>
        <li>Officia reiciendis voluptate animi laudantium recusandae.</li>
      </ul>
      <div id="qcSearchBox">
        <form action="#">
          <input type="text" value="" placeholder="Search..."/>
        </form>
      </div>
    </section>
  </div>