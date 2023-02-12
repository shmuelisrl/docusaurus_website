---
sidebar_position: 2
title: Spline Endpoint Info
description: This node gives you some information about the spline Endpoints.
tags:
  - Cuve
  - Info
  - field
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/spline_endpoint_info.png" alt="Smiley face" className="floatme"/>

### Spline Endpoint Info
This node gives you some information about the spline Endpoints which will come in useful for many things.
   
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>


# Outputs
<div class="md-indent">

## Start Index
<div class="md-indent">

_**Type -** Integer, **Domain -** Spline_.  
The first index of a spline.
</div>

## End Index
<div class="md-indent">

_**Type -** Integer, **Domain -** Spline_.  
The last index of a spline.
</div>

(↑ These are useful for wrapping indices, and in use with [field at index](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/utilities/field_at_index.html), as well as much more.)

## Start Position
<div class="md-indent">

_**Type -** Vector, **Domain -** Spline_.  
The startpoint position (the position at the fist index in a spline).
</div>

## End Position
<div class="md-indent">

_**Type -** Vector, **Domain -** Spline_.  
The endpoint position (the position at the last index in a spline).
</div>

</div>