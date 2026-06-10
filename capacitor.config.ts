const config: CapacitorConfig = {
  appId: 'uk.homelab.mcc',
  appName: 'Media Control Center',
  webDir: '.next',

  server: {
    url: 'https://media.homelab-server.uk',
    cleartext: true
  },

  android: {
    scheme: 'mcc'
  }
}

export default config
