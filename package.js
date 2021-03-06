Package.describe({
    name: "socialize:base-model",
    summary: "A model for all other models to inherit from ",
    version: "0.4.0",
    git: "https://github.com/copleykj/socialize-base-model.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use(["meteor", "mongo", "underscore"]);

    api.use([
        "socialize:server-time@0.1.2", "aldeed:simple-schema@1.5.3",
        "aldeed:collection2@2.9.0", "matb33:collection-hooks@0.8.1"
    ]);

    api.imply(["meteor", "mongo", "underscore"]);

    api.imply([
        "aldeed:simple-schema@1.5.3", "aldeed:collection2@2.9.0", "matb33:collection-hooks@0.8.1"
    ]);

    api.addFiles(["base-model.js", "security.js"]);

    api.export("BaseModel");
});
