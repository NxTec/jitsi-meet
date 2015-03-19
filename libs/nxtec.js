(function () {
    var isEmbed = location.hash === '#external';
    setElementVisibility('toolbar_lock', isEmbed);
    setElementVisibility('toolbar_chat', isEmbed);
    setElementVisibility('toolbar_prezi', isEmbed);
    setElementVisibility('toolbar_hangup', isEmbed);
    setElementVisibility('toolbar_link', isEmbed);
    setElementVisibility('toolbar_etherpad', isEmbed);
    setElementVisibility('toolbar_settings', isEmbed);
    setElementVisibility('toolbar_sip', isEmbed);
    setElementVisibility('bottomToolbar_chat', isEmbed);
    setElementVisibility('bottomToolbar_contact_list', isEmbed);
    setElementVisibility('downloadlog', isEmbed);

    function setElementVisibility(id, isEmbed) {
        document.getElementById(id).style.display = isEmbed ? 'none' : 'inline';
    }
})();