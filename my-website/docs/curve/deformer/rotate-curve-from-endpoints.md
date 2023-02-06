---
sidebar_position: 6
title: Rotate Curves by Endpoints
tags:
  - Cuve
  - Deformer
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/rotate_splines_from_endpoints.png" alt="Smiley face" className="floatme"/>

 ### Rotate Curves by Endpoints
  This node offsets the curve in its local x,y,z (normal,tangent normal, and tangent) axes
  
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
The pivot point. Rotate from the startpoint of the curve or the endpoint.
</div>

## Rotation
<div class="md-indent">

_**Type -** Vector, **Domain -** Point_.  
The spline's rotation [around the pivot].
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