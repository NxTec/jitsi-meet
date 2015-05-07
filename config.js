var config = {
    hosts: {
        domain: 'webrtcdev.collaborate.center',
        //anonymousdomain: 'guest.example.com',
        muc: 'conference.webrtcdev.collaborate.center', // FIXME: use XEP-0030
        bridge: 'jitsi-videobridge.webrtcdev.collaborate.center', // FIXME: use XEP-0030
        //jirecon: 'jirecon.webrtcdev.collaborate.center',
        //call_control: 'callcontrol.webrtcdev.collaborate.center',
        //focus: 'focus.webrtcdev.collaborate.center' - defaults to 'focus.webrtcdev.collaborate.center'
    },
    getroomnode: function (path) { var regex = new RegExp("[\\?&]node=([^&#]*)"); var matches = regex.exec(window.location.search); console.log('custom getRoomNode node matches:', matches); return matches === null ? "" : decodeURIComponent(matches[1].replace(/\+/g, " ")); },
    //  useStunTurn: true, // use XEP-0215 to fetch STUN and TURN server
    //  useIPv6: true, // ipv6 support. use at your own risk
    useNicks: false,
    bosh: '//webrtcdev.collaborate.center/http-bind', // FIXME: use xep-0156 for that
    clientNode: 'http://jitsi.org/jitsimeet', // The name of client node advertised in XEP-0115 'c' stanza
    //focusUserJid: 'focus@auth.webrtcdev.collaborate.center', // The real JID of focus participant - can be overridden here
    //defaultSipNumber: '', // Default SIP number
    desktopSharing: 'ext', // Desktop sharing method. Can be set to 'ext', 'webrtc' or false to disable.
    chromeExtensionId: 'adegdgcakdkmpacfffmjbjhagnkoncpj', // Id of desktop streamer Chrome extension
    desktopSharingSources: ['screen', 'window'],
    minChromeExtVersion: '0.1', // Required version of Chrome extension
    openSctp: true, // Toggle to enable/disable SCTP channels
    disableStats: false,
    disableAudioLevels: false,
    channelLastN: -1, // The default value of the channel attribute last-n.
    adaptiveLastN: false,
    adaptiveSimulcast: false,
    useRtcpMux: true, // required for FF support
    useBundle: true, // required for FF support
    enableRecording: false,
    enableWelcomePage: false,
    enableSimulcast: false, // blocks FF support
    logStats: false, // Enable logging of PeerConnection stats via the focus
    /*noticeMessage: 'Service update is scheduled for 16th March 2015. ' +
    'During that time service will not be available. ' +
    'Apologise for inconvenience.'*/
};
