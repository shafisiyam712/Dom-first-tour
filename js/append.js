//where to add
const container=document.getElementById('container')
//what to be added
const section=document.createElement('section')
const h1=document.createElement('h1')
h1.innerText='My food List'
section.appendChild(h1)

const ul=document.createElement('ul')

const li1=document.createElement('li')
li1.innerText='Biriyani'
ul.appendChild(li1)

const li2=document.createElement('li')
li2.innerText='pasta'
ul.appendChild(li2)

const li3=document.createElement('li')
li3.innerText='pizza'
ul.appendChild(li3)

//add the child
section.appendChild(ul)
container.appendChild(section)

const sectionDress=document.createElement('section')
sectionDress.innerHTML=`
<h1>My dress</h1>
<ul>
<li>T-Shirt</li>
<li>Panjabi</li>
<li>Lunggi</li>
</ul>
`
container.appendChild(sectionDress)
