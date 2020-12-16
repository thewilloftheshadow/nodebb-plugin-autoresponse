<form role="form" class="autoresponse-settings">
    <h4>AutoResponse Plugin Settings</h4>
    <div class="row">
        <div class="col-sm-6 col-xs-12">
            <div class="form-group">
                <label>Delegated Bot Username</label>
                <input id="botUsername" name="botUsername" type="text" class="form-control" placeholder="admin">
                 <small class="text-muted">Start typing the username you'd like to use</small>
            </div>
        </div>

        <div class="col-sm-6 col-xs-12">
            <div class="form-group">
                <label class="text-muted">Delegated Bot User Id</label>
                <input id="botUid" name="botUid" type="text" class="form-control disabled" disabled="disabled" placeholder="1">
                 <small class="text-muted">Auto populated</small>
            </div>
        </div>

        <div class="col-sm-6 col-xs-12">
            <div class="form-group">
                <label>Command Prefix</label>
                <input id="botUid" name="botUid" type="text" class="form-control" placeholder="/">
                 <small>What symbol should the commands start with</small>
            </div>
        </div>

        <div class="card col-xs-12">
          <div class="card-body">
            <h5 class="card-title">Note</h5>
            It is a recommended that you set that username as a global moderator so it can
            "reply" with the autoresponses in all categories/topics.
            Visit the <a href="{base_url}/admin/manage/admins-mods">Manage > Admins & Mods</a> page to do so.
          </div>
        </div>
    </div>
</form>
<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
    <i class="material-icons">save</i>
</button>
