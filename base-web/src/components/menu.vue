<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul data-widget="tree" class="sidebar-menu">
        <li class="header">HEADER</li>
        <!-- Optionally, you can add icons to the links -->
        <li class="active">
          <router-link to="test1">
            <i class="fa fa-link"></i> <span>Test1</span>
          </router-link>
        </li>
        <li>
          <router-link to="test2">
            <i class="fa fa-link"></i> <span>Another Test2</span>
          </router-link>
        </li>
        <li class="treeview">
          <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link to="test1">
                <i class="fa fa-circle-o"></i> <span>Link in level Test1</span>
              </router-link>
            </li>
            <li>
              <router-link to="test2">
                <i class="fa fa-laptop"></i> <span>Link in level Test2</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>


  export default {
    name: 'va-menu',
    created () {
    },
    computed: {
    }
  }
</script>
