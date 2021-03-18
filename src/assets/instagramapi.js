
// TOKEN: IGQVJVeTZAkeE1MUnpORmZAzeVZAMd1JIVGhsdFhfLVhrYkhuenZAEN2J4SFRuNWtyakthRm5QWmtTXy1HUl9WdFJ4c0hlekg1RFFabmthbnBwckxsam52alB0OWlmLUxvMlNqRGpweEJRbEdzMHJEbDNlMwZDZD

//https://api.instagram.com/oauth/authorize?client_id=2522853918016492&redirect_uri=https://danielcanetti.com/auth/&scope=user_profile,user_media&response_type=code

// SHORT LIVED: AQCMzAx8pNicgRjQRT2a8L93VHQVJK2ouBNz3LsaFDwhspFEfUy6VN_Q823QyxafqHcnQHpWPZUQmAzsqjTAHtbBNAqXSAbGICyUQPXMH6JQ-vQ3d33tlrYo8Jx15E2a0gXDpJUwEp54ehD_O-oXTHXnlgZVZtDIIh98odQczo6uLD84G_FNFVwq7BiKjae-QQcsPS6uyfnKVOHix9BKF7KcRECvPeoY3HFwKiwyvtnNFg

// client_id: "2522853918016492", client_secret: "2e20994904676f929c7b99b7dabf9d3b", grant_type: "authorization_code", redirect_uri: "https://danielcanetti.com/auth/", code: "AQCMzAx8pNicgRjQRT2a8L93VHQVJK2ouBNz3LsaFDwhspFEfUy6VN_Q823QyxafqHcnQHpWPZUQmAzsqjTAHtbBNAqXSAbGICyUQPXMH6JQ-vQ3d33tlrYo8Jx15E2a0gXDpJUwEp54ehD_O-oXTHXnlgZVZtDIIh98odQczo6uLD84G_FNFVwq7BiKjae-QQcsPS6uyfnKVOHix9BKF7KcRECvPeoY3HFwKiwyvtnNFg"

<script>
$.ajax({
    method: "POST",
    url: "https://api.instagram.com/oauth/access_token",
    data: { client_id: "2522853918016492", client_secret: "2e20994904676f929c7b99b7dabf9d3b", grant_type: "authorization_code", redirect_uri: "https://danielcanetti.com/auth/", code: "AQCMzAx8pNicgRjQRT2a8L93VHQVJK2ouBNz3LsaFDwhspFEfUy6VN_Q823QyxafqHcnQHpWPZUQmAzsqjTAHtbBNAqXSAbGICyUQPXMH6JQ-vQ3d33tlrYo8Jx15E2a0gXDpJUwEp54ehD_O-oXTHXnlgZVZtDIIh98odQczo6uLD84G_FNFVwq7BiKjae-QQcsPS6uyfnKVOHix9BKF7KcRECvPeoY3HFwKiwyvtnNFg" }
    })
    .done(function( msg ) {
    console.log( "LONG: " + msg );
});
</script>