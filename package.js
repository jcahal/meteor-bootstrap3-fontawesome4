Package.describe({
  summary: "Provides Bootstrap 3 and Font-Awesome 4."
});

Package.on_use(function (api) {
  api.use('jquery');

  api.add_files('/Monitor/packages/bootstrap3-fontawesome4/lib/css/bootstrap.css', 'client');
//  api.add_files(path.join(asset_path, 'css', 'bootstrap-theme.css'), 'client');
//  api.add_files(path.join(asset_path, 'js', 'bootstrap.js'), 'client');

  // fonts
//  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.eot'), 'client');
//  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.ttf'), 'client');
//  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.svg'), 'client');
//  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.woff'), 'client');
//  api.add_files(path.join(asset_path, 'fonts', 'FontAwesome.otf'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.
//  api.add_files(path.join(asset_path, 'css', 'font-awesome.css'), 'client');
//  api.add_files(path.join('override.css'), 'client');
});
