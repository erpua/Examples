# extras - HTML

.feautes-list-item:not:nth-child(3n) {
margin-right: 0;
}

.team-list-item:last-child {
margin-right: 0;
}

ul li a span

button {
border: none;
margin: 0;
padding: 18px 92px;
font-size: 13px;
line-height: 17px;
}

icons of features list html: ul> li class="features-list-item icon-tools or icon-computer.."

.features-list\_\_item::before {
content: '';
display: block;
width:..;
height:...;
background-repeat: no-repeat;
background-position: center;
}

.item-tools::before {
icons: background-image: url(../.png);
}

icons on team cards:

.team-list\_\_sosials a {
display: block;
width
height
border:..
background-repeat: no-repeat;
background-position: center;
}

floats - obtekanie kartinki tekstom
if floats - .clearfix::after each block {
display: table;
content: '';
clear: both;
}

.team-list**sosials a:hover,
.team-list**sosials a:focus {
color: blablabla

.icon-facebook { icons: background-image: url(../.png); }

POSIIION RELATIVE AND ABSOLUTE AND TRANSFORM

.parent {
position: relative;
width
heght
background-color:
}

.child {
position: absloute;
width
heigth
background-color:
top: 50px;
left: 50px;
transform: translate (-10px, -10px) - element will move -10 -10 px according
X and Y according last top and left positioning

!for making icons overlow transparent
together with icons transparent on it -
use opacity !!! not gradient

        div class card
          <div class overlay>
            sometext
            span class iverlay-icon
          </div>
          img
          p class card-name
          p class card-position

.card { position: relative; width: 224px; }

.overlay {
position: absolute;
width: 100%;
heght: 249px;
background-color: rgb(34,34,34);
opacity: 0;
}

.overlay-icon {
position: absolute;
left
top

display: inline-block;
width
height
bgclr

.card:hover overlay {
opacity: 0.949;
}

      icons left to article

article class article
h2 blanblabla
p blablablalb

.article {
position: relative;
width: 300px;
padding-left: 60px;
box-shadow: 0 0 2px 2px rgba(56,5,56,.3);
}

.article::before {
position: absolute;
left: 0;
top: 10px;
display: inline-block;
content: '';
width: 40px;
heigth: 40px'
bgclr rgb
}

to do min-height - in order not to break html karkas

.page-nav {
display: flex;
justify-content: space-between;
align-items: center;  
 min-heigth: 100px;
}

margin-left: auto; - all goes to the right

display: flex;
flex-direction: column;
justify-content: center;
align-items: center; for @media planchets

filter: greyscale(1) / filter: greyscale(0.3)

transform: scale(1.05);
box-shadow: 0 14px 28px rgba(0,0,0,0.25);

- .banner {
  background-image: linear-gradient(
  to right,
  rgba(239,59,54,0.3),
  rgba(255,255,255,0.3)
  ),
  llinear-gradient(
  to right,
  rgba(0,59,54,0.3),
  rgba(55,25,55,0.3)
  ),
  url('../img/banner.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  }

* .size-filter-check:checked + .size-filter-label > size-filter-item-size { color: #orange;}

* border-bottom insted of span::after then hover

* all the time to double check for zoom your webpage

* transition-delay: 1s;

* pixabay.com - pictures

* @viewport { width: device-width; zoom: 1.0; } // media for css

* mydevice.io //checking adaptive design
