import { createToken } from './token';

export function createExtensionObject(manifest, index, role, isLinked, ownerID, channelId, secret) {
  return {
    authorName: manifest.author_name,
    clientId: manifest.id + ':' + index,
    description: manifest.description,
    iconUrl: manifest.icon_url,
    id: manifest.id + ':' + index,
    name: manifest.name,
    requestIdentityLink: manifest.request_identity,
    sku: manifest.sku,
    state: manifest.state,
    summary: manifest.summary,
    token: createToken(role, isLinked, ownerID, channelId, secret),
    vendorCode: manifest.vendor_code,
    version: manifest.version,
    views: manifest.views,
    whitelistedConfigUrls: manifest.whitelisted_config_urls,
    whitelistedPanelUrls: manifest.whitelisted_panel_urls,
    channelId: channelId,
  };
}
