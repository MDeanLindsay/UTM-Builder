function addUrlDecorator() {
    var url = document.getElementById('url-input').value;
    if ( url.includes('?') ) {
      connector = '&';
    } 
    else {
      connector = '?';
    }
      return url + connector;
  }
  
function addUtmSource() {
    var utmSource = document.getElementById('source-input').value;
    if (utmSource != '') {
      return ('&') + 'utm_source=' + utmSource.split(' ').join('%20');
    }
    else {
      return ('');
    }
  }
  
function addUtmMedium() {
    var utmMedium = document.getElementById('medium-input').value;
    if (utmMedium != '') {
      return '&utm_medium=' + utmMedium.split(' ').join('%20');
    } 
    else {
      return ('');
    }
  }
  
function addUtmCampaign() {
    var utmCampaign = document.getElementById('campaign-input').value;
    if (utmCampaign != '') {
      return '&utm_campaign=' + utmCampaign.split(' ').join('%20');
    } else {
      return ('');
    }
  }
  
function addUtmContent() {
    var utmContent = document.getElementById('content-input').value;
    if (utmContent != '') {
      return '&utm_content=' + utmContent.split(' ').join('%20')
    } else {
      return ('');
    }
  }

function myFunction() {
  if(document.getElementById("url-input").value.length == 0) {
    document.getElementById("yourUTM").value = "You forgot the link.";
    }
  else if(document.getElementById("campaign-input").value.length == 0) {
    document.getElementById("yourUTM").value = "You forgot the campaign.";
    }
  else {
    document.getElementById("yourUTM").value = addUrlDecorator() + addUtmSource() + addUtmMedium() + addUtmCampaign() + addUtmContent();
    }
  }

function copyText() {
  var Text = document.getElementById("yourUTM");
  Text.select();
  navigator.clipboard.writeText(Text.value);
}