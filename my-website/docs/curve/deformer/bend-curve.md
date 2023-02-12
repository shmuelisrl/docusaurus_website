---
sidebar_position: 5
title: Bend Curve
description: This node bends a curve in a specified direction.
tags:
  - Cuve
  - Deformer
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/bend_curves.png" alt="Smiley face" className="floatme"/>

### Bend Curve
This node bends a curve in a specified direction.
   
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>

# Inputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.
</div>

## Selection
<div class="md-indent">

 _**Type -** Boolean, **Domain -** Point_.  
 What points will be effected by this node. (All indices will stay the same.)
</div>

## Start / End
<div class="md-indent">

_**Type -** Boolean, **Domain -** Spline_.  
The pivot point. Bend it from the startpoint of the curve or the endpoint.
</div>

## Direction
<div class="md-indent">

_**Type -** Vector, **Domain -** Point_.  
In what direction in 3D space to bend the curve in.
</div>

</div>

# Outputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.  
Outputs the deformed geometry.
> All indices will stay the same.

</div>
</div>