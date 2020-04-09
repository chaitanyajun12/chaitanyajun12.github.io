import '../css/styles.css';
import GithubIcon from '../images/github.svg';
import LinkedInIcon from '../images/linkedin.svg';
import TwitterIcon from '../images/twitter.svg';
import InstagramIcon from '../images/instagram.svg';

function getLinkImg() {
    const linkImg = new Image();
    linkImg.className = 'link-img';
    return linkImg;
}

function getAnchor() {
    var anchor = document.createElement('a');
    anchor.target = '_blank';   
    return anchor; 
}

var container = document.getElementById('container');

var githubA = getAnchor();
githubA.href = 'https://github.com/chaitanyajun12';

const githubIcon = getLinkImg();
githubIcon.src = GithubIcon;

githubA.appendChild(githubIcon);

var linkedInA = getAnchor();
linkedInA.href = 'https://www.linkedin.com/in/krishnachaitanyam/';

const linkedInIcon = getLinkImg();
linkedInIcon.src = LinkedInIcon;

linkedInA.appendChild(linkedInIcon);

var twitterA = getAnchor();
twitterA.href = 'https://twitter.com/Chaitanyajun12';

const twitterIcon = getLinkImg();
twitterIcon.src = TwitterIcon;

twitterA.appendChild(twitterIcon);

var instagramA = getAnchor();
instagramA.href = 'https://www.instagram.com/chaitanya.jun12/';

const instagramIcon = getLinkImg();
instagramIcon.src = InstagramIcon;

instagramA.appendChild(instagramIcon);

container.appendChild(githubA);
container.appendChild(linkedInA);
container.appendChild(twitterA);
container.appendChild(instagramA);