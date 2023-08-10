import { ExtensionContext } from "vscode";

import log from "./log";

interface ExtensionPackageJson {
  "displayName": string,
  "version": string,
}

function packageJson(context: ExtensionContext): ExtensionPackageJson {
  return context.extension.packageJSON as ExtensionPackageJson;
}

export function activate(context: ExtensionContext) {
  const { version } = packageJson(context);
  log.info(`Extension v${version} startup successful`);
  return {};
}

export function deactivate() {
  return;
}
