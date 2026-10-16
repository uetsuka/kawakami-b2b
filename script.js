import {installLeaveGuard} from './leave-guard.js';
const slides = [
  { label: 'TRADITIONAL OKINAWAN TOFU', overline: 'Made in Okinawa · Since 1958', image: 'assets/official-01.webp', alt: 'Kawakami Foods artisans preparing tofu in Okinawa' },
  { label: 'TRADITIONAL OKINAWAN TOFU', overline: 'Made in Okinawa · Since 1958', image: 'assets/official-02.webp', alt: 'Fresh tofu curds being placed in trays' },
  { label: 'TRADITIONAL OKINAWAN TOFU', overline: 'Made in Okinawa · Since 1958', image: 'assets/official-03.webp', alt: 'An artisan working with fresh tofu in a large vat' },
  { label: 'TRADITIONAL OKINAWAN TOFU', overline: 'Made in Okinawa · Since 1958', image: 'assets/official-06.webp', alt: 'Tofu curds being shaped by hand' },
  { label: 'TRADITIONAL OKINAWAN TOFU', overline: 'Made in Okinawa · Since 1958', image: 'assets/official-07.webp', alt: 'Shima tofu moving through the production line' }
];
const products = [
  { name: 'Shima Tofu', category: 'tofu', image: 'assets/shima.webp', description: "Firm Okinawan tofu for a quick pan-fry. Season to taste, scatter with spring onions, and add cabbage or carrots if you like.", ideas: [['Stir-fried vegetables', 'Use the firm texture in a vegetable stir-fry.'], ['Simmered dishes', 'Add pieces to a seasoned broth or stew.'], ['Menu discussion', 'Bring Okinawan tofu to your retail range or restaurant menu.']] },
  { name: 'Yushi Tofu', category: 'tofu', image: 'assets/yushi.webp', description: "Soft tofu curds for a quick warm meal. Enjoy with an Okara Spoon and optional spring onions and grated ginger.", ideas: [['Original warm bowl', 'Serve warm in a simple bowl, keeping the presentation understated.'], ['Egg topping', 'Add an egg topping as a serving suggestion.'], ['Savoury toppings', 'Choose toppings that suit your menu and local preferences.']] },
  { name: 'Atsuage', category: 'tofu', image: 'assets/atsuage.webp', description: "Pan-seared tofu steak with a simple soy sauce, water and sugar sauce, made with plant-based ingredients.", ideas: [['Tofu steak', 'Pan-sear and serve with a plant-based mushroom sauce for vegan and vegetarian menus.']] },
  { name: 'Silken & Soft Tofu', category: 'tofu', image: 'assets/silken.webp', description: "Smooth tofu served chilled with spring onions, grated ginger and your preferred dressing.", ideas: [['Chilled serving', 'Serve simply with toppings of your choice.'], ['Soup', 'Add gently to a light soup.'], ['Salad', 'Use as a soft-textured addition to a salad.']] },
  { name: 'Jimami Tofu', category: 'tofu', image: 'assets/jimami.webp', description: "A smooth, springy Okinawan peanut dessert to enjoy with a sweet sauce.", ideas: [['Small plate', 'Present as a distinctive Okinawan small dish.'], ['Dessert idea', 'Explore a lightly sweet menu presentation.']], note: 'Contains peanuts. Made from peanuts rather than soybeans.' },
  { name: 'Aburaage', category: 'tofu', image: 'assets/aburaage-hd.webp', description: "Thin fried tofu that soaks up the flavours of laksa-style coconut soup.", ideas: [['Soup', 'Add to soup for flavour and texture.'], ['Simmered dishes', 'Combine with vegetables in a seasoned broth.']] },
  { name: 'Dried Okara', category: 'okara', image: 'assets/dried-okara-hd.webp', description: "Okara from Okinawan tofu-making for bread and cookies. Replace part of the wheat flour using a suitable recipe.", ideas: [['Food ingredient', 'Use in savoury sides and vegetable dishes.'], ['Product development', 'Explore new recipes with this versatile soybean ingredient.']] },
  { name: 'Okara Spoon', category: 'okara', image: 'assets/okara-spoon.jpg', description: "An edible spoon made with okara from tofu-making. Enjoy with dessert and explore food and ingredients together.", ideas: [['Food-service pairing', 'Pair with desserts or tasting portions.'], ['Retail concept', 'An edible addition to a dessert selection.']], note: 'Contains wheat, egg and soy.' }
];

// Editorial serving concepts, not manufacturer-verified preparation instructions.
const servingConcepts = [
  {
    "title": "Quick Okinawan tofu stir-fry",
    "time": "3–10 min",
    "ingredients": "Shima tofu, oil, your preferred seasoning and spring onions. Cabbage and carrots are optional.",
    "steps": [
      [
        "Prepare",
        "Drain the tofu and cut into bite-sized pieces."
      ],
      [
        "Pan-fry",
        "Pan-fry in a little oil until lightly golden. Add cabbage or carrots if you like and cook until tender."
      ],
      [
        "Finish",
        "Season to taste and scatter with spring onions."
      ]
    ],
    "style": "stirfry",
    "use": "A quick main or side dish for everyday meals."
  },
  {
    "title": "Warm Yushi Tofu, ready to enjoy",
    "time": "3–5 min",
    "ingredients": "Yushi tofu, an Okara Spoon and, if desired, spring onions and grated ginger.",
    "steps": [
      [
        "Warm",
        "Follow the heating instructions on the pack. Heat in the original container only if the pack specifies that it is suitable; otherwise use a microwave-safe dish."
      ],
      [
        "Add toppings",
        "Add spring onions and grated ginger if you like."
      ],
      [
        "Enjoy",
        "Enjoy straight from the suitable serving container with an Okara Spoon."
      ]
    ],
    "style": "curds",
    "use": "An easy warm meal for busy parents, including households with a baby.",
    "extra": "Preparation time is an estimate; follow the heating time and method on the pack."
  },
  {
    "title": "Quick plant-based atsuage steak",
    "time": "3–10 min",
    "ingredients": "Atsuage, vegetable oil, soy sauce, water and a little sugar.",
    "steps": [
      [
        "Prepare",
        "Pat the atsuage dry and keep it in thick steak-sized portions."
      ],
      [
        "Pan-sear",
        "Heat a little vegetable oil and sear both sides until golden and heated through."
      ],
      [
        "Sauce & serve",
        "Simmer soy sauce, water and a little sugar into a sauce, then spoon over the atsuage."
      ]
    ],
    "style": "steak",
    "use": "A simple tofu steak for vegan and vegetarian menus.",
    "extra": "Use plant-based sauces and seasonings, without butter, fish stock or oyster sauce."
  },
  {
    "title": "Chilled tofu with fresh toppings",
    "time": "5 min",
    "ingredients": "Chilled silken or soft tofu, spring onions, grated ginger and your preferred dressing.",
    "steps": [
      [
        "Portion",
        "Gently drain the chilled tofu and place on small plates."
      ],
      [
        "Top",
        "Add spring onions and grated ginger."
      ],
      [
        "Serve",
        "Add your preferred dressing just before serving."
      ]
    ],
    "style": "silken",
    "use": "A light starter or small side dish."
  },
  {
    "title": "An Okinawan peanut dessert",
    "time": "5 min",
    "ingredients": "Jimami tofu and a sweet sauce of your choice.",
    "steps": [
      [
        "Prepare",
        "Prepare small dessert plates and your chosen sweet sauce."
      ],
      [
        "Plate",
        "Carefully portion the tofu onto each plate."
      ],
      [
        "Finish",
        "Add a little sweet sauce and enjoy its smooth, springy texture."
      ]
    ],
    "style": "jimami",
    "use": "An Okinawan sweet treat after a meal or during a break. Contains peanuts."
  },
  {
    "title": "Aburaage in laksa-style soup",
    "time": "5–10 min",
    "ingredients": "Aburaage, prepared laksa-style coconut soup, noodles and vegetables.",
    "steps": [
      [
        "Slice",
        "Cut the aburaage into bite-sized pieces."
      ],
      [
        "Warm",
        "Add to prepared laksa-style coconut soup and heat through."
      ],
      [
        "Serve",
        "Pair with noodles and cooked vegetables, letting the aburaage soak up the soup."
      ]
    ],
    "style": "strips",
    "use": "A familiar Singapore-inspired soup with an Okinawan tofu twist.",
    "extra": "Time assumes prepared soup; allow additional time for noodles and vegetables as needed."
  },
  {
    "title": "Bake with okara: bread & cookies",
    "time": "Varies by recipe",
    "ingredients": "Dried okara, flour and the other ingredients in your chosen bread or cookie recipe.",
    "steps": [
      [
        "Choose a recipe",
        "Choose a bread or cookie recipe designed to include dried okara."
      ],
      [
        "Mix",
        "Replace part of the wheat flour with dried okara according to the recipe, adjusting the liquid as directed."
      ],
      [
        "Bake",
        "Shape and bake according to the recipe."
      ]
    ],
    "style": "okara",
    "use": "Bring okara from Okinawan tofu-making into everyday baking."
  },
  {
    "title": "An edible spoon to enjoy together",
    "time": "2–5 min",
    "ingredients": "Okara Spoon and your favourite dessert.",
    "steps": [
      [
        "Portion",
        "Place a small dessert portion in a bowl or tasting cup."
      ],
      [
        "Pair",
        "Add the Okara Spoon just before serving."
      ],
      [
        "Enjoy together",
        "Enjoy the dessert and edible spoon, and talk together about the ingredients and where food comes from."
      ]
    ],
    "style": "dessert",
    "use": "Made with okara from tofu-making: a playful way for families to explore food. Contains wheat, egg and soy."
  }
];
function servingIllustration(concept) {
  const golden = ['golden', 'strips'].includes(concept.style);
  let food = '';
  if (concept.style === 'steak') {
    food = '<ellipse cx="257" cy="200" rx="108" ry="42" fill="#805031" opacity=".65"/><path d="M171 153l111-20 51 38-111 30z" fill="#d9943e" stroke="#a9672c" stroke-width="3"/><path d="M171 153v40l51 36v-28z" fill="#b97832"/><path d="M222 201l111-30v39l-111 19z" fill="#dfb571"/><g stroke="#985226" stroke-width="5" stroke-linecap="round"><path d="M196 151l42 31M222 146l42 31M247 141l43 31"/></g><g fill="#9a7857" stroke="#715039" stroke-width="2"><path d="M259 177q17-25 34-2l-12 6v12h-11v-12z"/><path d="M293 192q17-25 34-2l-12 6v12h-11v-12z"/></g><g fill="#607e46"><ellipse cx="353" cy="169" rx="20" ry="10" transform="rotate(-35 353 169)"/><ellipse cx="364" cy="187" rx="21" ry="10" transform="rotate(-25 364 187)"/></g><g fill="#d77b3d"><path d="M143 189l26 9-25 18z"/><path d="M151 215l25-7-5 24z"/></g>';
  } else if (concept.style === 'dessert') {
    food = '<path d="M170 155h170l-23 80H194z" fill="#ded0b9"/><circle cx="245" cy="157" r="47" fill="#f9e9d1"/><circle cx="278" cy="168" r="31" fill="#d2a172"/><path d="M330 205l70-88" stroke="#ad7946" stroke-width="15" stroke-linecap="round"/><ellipse cx="404" cy="110" rx="19" ry="29" transform="rotate(35 404 110)" fill="#c69b63"/>';
  } else if (['silken','jimami'].includes(concept.style)) {
    food = '<path d="M199 145l95-20 51 40-100 28z" fill="#fff3d7"/><path d="M199 145v65l46 35v-52z" fill="#e0ceaa"/><path d="M245 193l100-28v60l-100 20z" fill="#f2dfbc"/>';
  } else {
    food = Array.from({length:12},(_,i)=>{const x=172+(i%4)*48+(Math.floor(i/4)%2)*12,y=140+Math.floor(i/4)*28;return `<rect x="${x}" y="${y}" width="${concept.style==='strips'?52:40}" height="${concept.style==='strips'?13:27}" rx="${['curds','okara'].includes(concept.style)?12:5}" transform="rotate(${i%2?12:-8} ${x+20} ${y+13})" fill="${golden?'#cf9147':concept.style==='okara'?'#deca9f':'#f9ecd0'}" stroke="#b79364" stroke-width="1"/>`;}).join('');
  }
  if (['stirfry','golden','strips','okara'].includes(concept.style)) food += '<g fill="#79925b"><path d="M149 177q20-39 43-10l-16 30z"/><path d="M310 196q25-35 49-13l-20 32z"/><path d="M226 208q16-19 32-5l-12 20z"/></g><g fill="#d97e42"><rect x="188" y="188" width="36" height="9" rx="4" transform="rotate(-24 200 191)"/><rect x="300" y="155" width="32" height="9" rx="4" transform="rotate(21 310 155)"/><rect x="264" y="207" width="30" height="8" rx="4"/></g>';
  const garnish = concept.style === 'dessert' ? '' : '<g fill="#52744b"><ellipse cx="245" cy="143" rx="14" ry="5" transform="rotate(-25 245 143)"/><ellipse cx="266" cy="151" rx="14" ry="5" transform="rotate(35 266 151)"/><ellipse cx="259" cy="134" rx="12" ry="5"/><ellipse cx="280" cy="140" rx="11" ry="4"/></g>';
  return `<figure class="serving-visual"><svg viewBox="0 0 520 330" role="img" aria-label="Illustrated serving suggestion: ${concept.title}" xmlns="http://www.w3.org/2000/svg"><rect width="520" height="330" fill="#eee2cf"/><path d="M0 285L520 220v110H0z" fill="#e1d0b6"/><ellipse cx="261" cy="258" rx="181" ry="27" fill="#8c7455" opacity=".14"/><path d="M100 178Q119 270 260 278Q398 267 420 178" fill="#334b50"/><ellipse cx="260" cy="178" rx="164" ry="80" fill="#faf1e0" stroke="#334b50" stroke-width="9"/><ellipse cx="260" cy="181" rx="139" ry="60" fill="#d6b882" opacity=".4"/>${food}${garnish}</svg><figcaption>Serving illustration</figcaption></figure>`;
}

const hero = document.querySelector('.hero');
const heroImages = [...document.querySelectorAll('.hero-image')];
let slideIndex = 0;
let activeImage = 0;
let transitioning = false;
let timer;
function showSlide(index, immediate = false) {
  const nextIndex = (index + slides.length) % slides.length;
  const slide = slides[nextIndex];
  if (!immediate && (transitioning || nextIndex === slideIndex)) return;
  document.querySelector('#hero-kicker').textContent = slide.label;
  document.querySelector('#hero-overline').textContent = slide.overline;
  if (immediate) {
    const image = heroImages[activeImage];
    image.src = slide.image;
    image.alt = slide.alt;
    image.dataset.scene = String(nextIndex);
    hero.dataset.slide = String(nextIndex);
    slideIndex = nextIndex;
    return;
  }
  transitioning = true;
  const outgoing = heroImages[activeImage];
  const incoming = heroImages[1 - activeImage];
  incoming.src = slide.image;
  incoming.alt = slide.alt;
  incoming.dataset.scene = String(nextIndex);
  const ready = incoming.decode ? incoming.decode().catch(() => {}) : Promise.resolve();
  ready.then(() => {
    if (!incoming.naturalWidth) { transitioning = false; return; }
    requestAnimationFrame(() => {
      incoming.classList.add('is-active');
      outgoing.classList.remove('is-active');
      incoming.removeAttribute('aria-hidden');
      outgoing.setAttribute('aria-hidden', 'true');
      outgoing.alt = '';
      activeImage = 1 - activeImage;
      slideIndex = nextIndex;
      hero.dataset.slide = String(nextIndex);
      transitioning = false;
    });
  });
}
function stopTimer() { clearInterval(timer); timer = undefined; }
function startTimer() { stopTimer(); if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => showSlide(slideIndex + 1), 6500); }
hero.addEventListener('mouseenter', stopTimer);
hero.addEventListener('mouseleave', startTimer);
hero.addEventListener('focusin', stopTimer);
hero.addEventListener('focusout', () => { setTimeout(() => { if (!hero.contains(document.activeElement)) startTimer(); }, 0); });
const previewSlide = Number(new URLSearchParams(location.search).get('slide'));
if (Number.isInteger(previewSlide) && previewSlide >= 1 && previewSlide <= slides.length) showSlide(previewSlide - 1, true);
slides.slice(1).forEach(slide => { const image = new Image(); image.src = slide.image; });
startTimer();

const groups = document.querySelector('#product-groups');
const choices = document.querySelector('#product-choices');
function photoMarkup(product) {
  return product.image ? `<div class="product-photo"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>` : `<div class="product-photo placeholder"><div class="photo-label"><strong>${product.category.toUpperCase()}</strong>${product.name}</div></div>`;
}
function cardMarkup(product, index) {
  return `<article class="product-card"><div class="product-preview">${photoMarkup(product)}<div class="serving-teaser"><small>TRY IT THIS WAY</small><strong>${servingConcepts[index].title}</strong><span>View steps &amp; time ↗</span></div></div><div class="product-detail"><h3><button class="product-card-trigger" type="button" data-product="${index}" aria-haspopup="dialog" aria-controls="product-dialog" aria-label="${product.name}: ${servingConcepts[index].title}. View preparation steps and time.">${product.name}</button></h3><p>${product.description}</p></div></article>`;
}
function renderProducts(filter = 'all') {
  groups.innerHTML = ['tofu', 'okara'].filter(category => filter === 'all' || filter === category).map(category => {
    const items = products.map((product, index) => ({ product, index })).filter(item => item.product.category === category);
    return `<section class="product-group" aria-label="${category === 'tofu' ? 'Tofu' : 'Okara'} products"><h3 class="group-title">${category.toUpperCase()}</h3><div class="product-grid">${items.map(item => cardMarkup(item.product, item.index)).join('')}</div></section>`;
  }).join('');
  groups.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => openProduct(Number(button.dataset.product), button)));
}
renderProducts();
choices.innerHTML = products.map((product, index) => `<label><input type="checkbox" name="product" value="${product.name}" data-choice="${index}"> ${product.name}</label>`).join('');
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', selected ? 'true' : 'false'); });
  renderProducts(button.dataset.filter);
}));

const dialog = document.querySelector('#product-dialog');
let currentProductIndex = 0;
let lastTrigger;
function openProduct(index, trigger) {
  currentProductIndex = index;
  lastTrigger = trigger;
  const product = products[index];
  document.querySelector('#dialog-title').textContent = product.name;
  document.querySelector('#dialog-description').textContent = product.description;
  const concept = servingConcepts[index];
  document.querySelector('#dialog-photo').innerHTML = servingIllustration(concept) + `<p class="serving-use">${concept.use}</p>`;
  document.querySelector('#dialog-ideas').innerHTML = `<header class="recipe-header"><h3>${concept.title}</h3><p class="recipe-time">Estimated preparation &amp; cooking: <strong>${concept.time}</strong></p></header><p class="recipe-ingredients"><strong>What you’ll need</strong><br>${concept.ingredients}</p><ol class="recipe-steps">${concept.steps.map(([title, detail]) => `<li><h3>${title}</h3><p>${detail}</p></li>`).join('')}</ol><p class="recipe-disclaimer">${concept.extra || ''}</p>` + (product.note ? `<p class="dialog-note">${product.note}</p>` : '');
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-layout').scrollTop = 0;
  dialog.showModal();
}
function closeDialog() { dialog.close(); if (lastTrigger?.isConnected) lastTrigger.focus(); }
document.querySelector('#dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
dialog.addEventListener('close', () => { if (lastTrigger?.isConnected) lastTrigger.focus(); });
document.querySelector('#dialog-enquire').addEventListener('click', () => { dialog.close(); goToEnquiry(currentProductIndex); });
function goToEnquiry(index) {
  const choice = document.querySelector(`[data-choice="${index}"]`);
  if (choice) { choice.checked = true; choice.dispatchEvent(new Event('change', { bubbles: true })); }
  if (location.hash !== '#contact') history.pushState(null, '', '#contact');
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => document.querySelector('[name="company"]').focus({ preventScroll: true }), 500);
}

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
nav.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));

const stickyContact = document.querySelector('#sticky-contact');
const visibleSections = { contact: false, footer: false };
const updateStickyContact = () => {
  stickyContact.hidden = visibleSections.contact || visibleSections.footer;
};
const stickyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { visibleSections[entry.target.dataset.stickySection] = entry.isIntersecting; });
  updateStickyContact();
});
[[document.querySelector('#contact'), 'contact'], [document.querySelector('.site-footer'), 'footer']].forEach(([section, name]) => {
  section.dataset.stickySection = name;
  stickyObserver.observe(section);
});

const form = document.querySelector('#contact-form');
let enquiryId;let enquirySaving=false,enquirySaved=false,draftBody='',draftRevision=0,draftTimer,draftRetry;
const apiBase=location.hostname==='uetsuka.github.io'?'https://kawakami-business-survey.chiekouetsuka.chatgpt.site':'';
const draftEndpoint=apiBase+'/api/enquiries/draft';
const draftStatus=document.createElement('p');draftStatus.setAttribute('role','status');draftStatus.setAttribute('aria-live','polite');form.prepend(draftStatus);
form.addEventListener('submit',async event=>{
 event.preventDefault();if(enquirySaving||!form.reportValidity())return;
 const result=document.querySelector('#form-result'),button=form.querySelector('[type="submit"]');
 enquiryId ||=crypto.randomUUID();const payload=enquiryPayload();
 enquirySaving=true;button.disabled=true;button.textContent='Sending…';result.hidden=false;result.textContent='';
 try{const r=await fetch(apiBase+'/api/enquiries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const response=await r.json();if(!r.ok||response.saved!==true)throw Error(response.error||'Please try again.');
 enquirySaved=true;clearTimeout(draftTimer);clearTimeout(draftRetry);draftStatus.textContent='';result.textContent='Thank you. Your business enquiry has been received. Reference: '+response.id;button.textContent='Enquiry received';form.querySelectorAll('input,textarea,select').forEach(input=>input.disabled=true);
 }catch(error){result.textContent=error.message||'We could not save your enquiry. Please try again.';enquirySaving=false;button.disabled=false;button.textContent='Submit Business Enquiry';}
 result.scrollIntoView({behavior:'smooth',block:'nearest'});
});

function enquiryPayload(){const data=new FormData(form);return {id:enquiryId,company:data.get('company')||'',name:data.get('name')||'',email:data.get('email')||'',country:data.get('country')||'',business:data.get('business')||'',products:data.getAll('product'),use:data.getAll('use').join('; '),volume:data.get('volume')||'',timeline:'',details:[data.get('packFormat')?'Preferred pack format: '+data.get('packFormat'):'',data.get('needs')?'Customer needs / menu opportunities: '+data.get('needs'):'',data.get('details')?'Other ideas / questions: '+data.get('details'):''].filter(Boolean).join('\n\n'),consent:data.get('consent')==='on',website:data.get('website')||''};}
function hasDraftInput(p){return p.products.length||['company','name','email','business','use','volume','timeline','details'].some(k=>p[k]?.trim());}
function flushEnquiry(){if(enquirySaved||!draftBody)return;const blob=new Blob([draftBody],{type:'application/json'});if(!navigator.sendBeacon(draftEndpoint,blob))void fetch(draftEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:draftBody,keepalive:true}).catch(()=>{});}
async function saveEnquiryDraft(body){if(enquirySaved)return;draftStatus.textContent='Saving progress…';try{const r=await fetch(draftEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body,keepalive:true});if(!r.ok)throw Error();if(body===draftBody&&!enquirySaved)draftStatus.textContent='Progress saved';}catch{if(body===draftBody&&!enquirySaved){draftStatus.textContent='Progress could not be saved. Retrying… Please keep this page open.';draftRetry=setTimeout(()=>saveEnquiryDraft(body),5000);}}}
function captureEnquiry(){if(enquirySaved)return;const p=enquiryPayload();if(!hasDraftInput(p)&&!enquiryId)return;enquiryId ||=crypto.randomUUID();p.id=enquiryId;draftRevision=Math.max(Date.now(),draftRevision+1);draftBody=JSON.stringify({...p,revision:draftRevision});clearTimeout(draftTimer);clearTimeout(draftRetry);const body=draftBody;draftTimer=setTimeout(()=>saveEnquiryDraft(body),700);}
form.addEventListener('input',captureEnquiry);form.addEventListener('change',captureEnquiry);installLeaveGuard({active:()=>!enquirySaved&&!!draftBody,flush:flushEnquiry});
