## Dynamic Plugins exported from the backstage/backstage repository, for use Red Hat Developer Hub

This repository contains a mechanism to export dynamic plugins (for use in Red Hat Developer Hub) from the plugins
in the [backstage/backstage](https://github.com/backstage/backstage) GitHub repository.

### How does it work ?

The repository contains a [list of plugins](plugins-list.yaml) that should be exported from the `backstage-backstage` repository,
as well as the typical associated `app-config.yaml` file (for frontend plugins).

Based on these informations, a GitHub worklflow checks out the `backstage/backstage` repository on a given tag,
and exports all the specified plugins to dynamic.

The exported dynamic plugin archives, as well as related required information are uploaded as release assets
for a given release which corresponds to a `backstage/backstage` release. 

### How to use the exported dynamic plugins

The exported dynamic plugins can be found as release assets.

For now, an export has been made only for the static plugins included in the release v1.23.4 of the `backstage/backstage` repository (used in RHDH 1.1), and its result is available in [release V1.23.4 of this repository](../../releases/tag/v1.23.4):

- You will find the dynamic plugin packages available as NPM package archives in the `.tgz`  release assets. You can copy the full URL to the `.tgz` archive of a plugin you want to install, and paste it in the RHDH plugins list.
- You will find the integrity `sha` you should use during installation, in the corresponding `.tgz.integrity` release asset.
- When available (only for the `adr` plugin for now), you would also find the typical `app-config.yaml` that should be used to wire a frontend plugin inside the RHDH UI, in the corresponding `.tgz.app-config.dynamic.yaml` release asset.

##### Disclaimers:

- Some plugins are not included, because there are still errors in the export process itself. The skipped plugins are commented, with an explanation in the following file: [plugins-list.yaml](../../blob/v1.23.4/plugins-list.yaml)
- These exported dynamic plugin have not all been tested on RHDH 1.1. Help in testing is welcomed to test them
- When testing them:
  - if a backend plugin fails to load, please open an issue in this GH repository mentioning the `.tgz` name of the plugin.
  - if a frontend plugin is not visible in the UI, it might simply be because you have to mount it inside the RHDH UI through configuration as explained in the frontend layout documentation. If oyu don't find a wau to wire it in the docs, please open an issue to track your question or problem.
  - when you have defined a frontend plugin configuration that works, and no `app-config` file was provided in this repo, please open an issue to propose your config, so that it would be integrated in this GH repository (following the same structure as [the adr plugin configuration](../../blob/v1.23.4/plugins/adr/app-config.dynamic.yaml)) for others to take advantage of it.