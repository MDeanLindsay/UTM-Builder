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
    document.getElementById("yourUTM").value = "Please add the link.";
    }
  else if(document.getElementById("campaign-input").value.length == 0) {
    document.getElementById("yourUTM").value = "Please add a campaign name.";
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

var acc = document.getElementsByClassName("accordion");
var i;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}