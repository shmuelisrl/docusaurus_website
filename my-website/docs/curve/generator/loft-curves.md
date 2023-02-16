---
sidebar_position: 4
title: Loft Curves
description: This node generates a mesh grid structure across curves; "lofting" a mesh grid across curves.
tags:
  - Cuve
  - Generator
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/loft_curves.png" alt="Smiley face" className="floatme"/>

 ### Loft Curves  
This node generates a mesh grid structure across curves; "lofting" a mesh across curves.
  
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>

# Inputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.  

</div>

## X Resolution
<div class="md-indent">

<Tabs  groupId="fast-slow">
<TabItem value="fast" label="Fast">

_**Type -** Integer, **Domain -** Static_.  
.
</TabItem>
<TabItem value="slow" label="Slow">

_**Type -** Integer, **Domain -** [Group Index](#group-index)_.  
.
</TabItem>  
</Tabs>
  

</div>

## Y Resolution
<div class="md-indent">
<Tabs groupId="fast-slow">
<TabItem value="fast" label="Fast">

_**Type -** Integer, **Domain -** Static_.  
.


</TabItem>
<TabItem value="slow" label="Slow">

_**Type -** Integer, **Domain -** [Group Index](#group-index)_.  
.

</TabItem>
</Tabs>
</div>

## X: Stick to Curve
<div class="md-indent">

_**Type -** Boolean, **Domain -** Spline_.  
.

</div>

## Y: Stick to Curve
<div class="md-indent">

_**Type -** Boolean, **Domain -** **(fix?)** Point_.  
.

</div>

## X: Factor
<div class="md-indent">

_**Type -** Float, **Domain -** Point_.  
.

</div>

## Y: Factor
<div class="md-indent">

_**Type -** Float, **Domain -** Point_.  
.

</div>


## Spline Order Weight
<div class="md-indent">

_**Type -** Float, **Domain -** Spline_.  
.

</div>

## Offset Start Point
<div class="md-indent">

_**Type -** Integer, **Domain -** Spline_.  
.

</div>

## Slide
<div class="md-indent">

_**Type -** Float, **Domain -** Spline_.  
.

</div>


## Group Index
<div class="md-indent">

 _**Type -** Integer, **Domain -** Spline_.  
. 

</div>


## Interpolation:
<div class="md-indent">

 _**Type -** Integer, **Domain -** **(fix)** Spline_.  

 0. 
 1. 
 2. 
 3. 

</div>
</div>

# Outputs
<div class="md-indent">

## Mesh
<div class="md-indent">

_**Type -** Geometry-Mesh_.  

> indices 

</div>
</div>

