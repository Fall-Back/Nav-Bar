Navbar
======

A responsive CSS only navigation bar that degrades well in older browser and provides a single-tier dropdown option. 

Markup Example
--------------

```
<div class="nav-bar">
    <nav class="nav-bar__inner">          
        <ol class="nav-bar__items">
            <li class="nav-bar__item"><a href="#1" tabindex="1" class="nav-bar__link">Link 1</a></li>
            <li class="nav-bar__item  has-subnav">
                <a href="#2" tabindex="1" class="nav-bar__link">Link 2</a>
                <a href="#" tabindex="1" class="nav-bar__link  subnav__open   subnav__open--icon-only  js-no-history"></a>
                <ul class="subnav" id="subnav1">
                    <li class="subnav__item"><a href="#2.1" tabindex="1" class="subnav__link">Sub link 2.1</a></li>
                    <li class="subnav__item"><a href="#2.2" tabindex="1" class="subnav__link">Sub link 2.2</a></li>
                    <li class="subnav__item"><a href="#2.3" tabindex="1" class="subnav__link">Sub link 2.3</a></li>
                    <li class="subnav__item"><a href="#2.4" tabindex="1" class="subnav__link">Sub link 2.4</a></li>
                    <li class="subnav__item"><a href="#2.5" tabindex="1" class="subnav__link">Sub link 2.5</a></li>
                    <li class="subnav__item"><a href="#2.6" tabindex="1" class="subnav__link">Sub link 2.6</a></li>
                </ul>
                <a href="#" tabindex="-1" class="subnav__link  subnav__cancel  js-no-history"></a>
            </li>
            <li class="nav-bar__item"><a href="#3" tabindex="1" class="nav-bar__link">Some <!--<br />-->link</a></li>
            <li class="nav-bar__item"><a href="#4" tabindex="1" class="nav-bar__link">Another</a></li>
            <li class="nav-bar__item  has-subnav">
                <span class="subnav__heading">Submenu heading:</span>
                <a href="#" tabindex="1" data-content="Submenu heading:" class="nav-bar__link  subnav__open  subnav__open--fake  js-no-history"></a>
                <ul class="subnav" id="subnav2">
                    <li class="subnav__item"><a href="#6.1" tabindex="1" class="subnav__link">Sub link 6.1</a></li>
                    <li class="subnav__item"><a href="#6.2" tabindex="1" class="subnav__link">Sub link 6.2</a></li>
                    <li class="subnav__item"><a href="#6.3" tabindex="1" class="subnav__link">Sub link 6.3</a></li>
                </ul>
                <a href="#" tabindex="-1" class="subnav__link  subnav__cancel  js-no-history"></a>
            </li>
        </ol>
    </nav>
</div>
```
