<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1 class="title">Todos</h1>
        <input
          id="input-todo"
          class="form-control input-lg"
          placeholder="What needs to be done?"
        />
        <ul class="nav nav-xs nav-pills">
          <li class="active">
            <a>all</a>
          </li>
          <li>
            <a>active</a>
          </li>
          <li>
            <a>completed</a>
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item">
            <div class="hover-anchor">
              <a class="hover-action text-muted">
                <span class="glyphicon glyphicon-remove-circle pull-right" />
              </a>
              <label class="i-checks">
                <input type="checkbox" />
                <i />
                <span>HTML</span>
              </label>
            </div>
          </li>
          <li class="list-group-item">
            <div class="hover-anchor">
              <a class="hover-action text-muted">
                <span class="glyphicon glyphicon-remove-circle pull-right" />
              </a>
              <label class="i-checks">
                <input type="checkbox" />
                <i />
                <span>CSS</span>
              </label>
            </div>
          </li>
          <li class="list-group-item">
            <div class="hover-anchor">
              <a class="hover-action text-muted">
                <span class="glyphicon glyphicon-remove-circle pull-right" />
              </a>
              <label class="i-checks">
                <input type="checkbox" />
                <i />
                <span>JavaScript</span>
              </label>
            </div>
          </li>
        </ul>
        <div class="col-xs-6">
          <label class="i-checks">
            <input type="checkbox" />
            <i />
            <span>Mark all as complete</span>
          </label>
        </div>
        <div class="col-xs-6 text-right">
          <button class="btn btn-default btn-xs">
            Clear completed (<span>0</span>)
          </button>
          <strong>0</strong> item left
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoTemplate',
  props: {
    msg: String
  }
}
</script>
