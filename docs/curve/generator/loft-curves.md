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
import ReactPlayer from 'react-player'

<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/loft_curves.png" alt="Smiley face" className="floatme"/>

 ### Loft Curves  
This node generates a mesh grid structure across curves; "lofting" a mesh across curves.
  
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>
<Tabs className="unique-tabs" groupId="fast-slow">
<TabItem value="fast" label="Fast" default>
</TabItem>
<TabItem value="slow" label="Slow" >
</TabItem>
</Tabs>

# Inputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.  
The curves that will be lofted over.

</div>

## X Resolution
<div class="md-indent">

<Tabs className="buttons-none" groupId="fast-slow">
<TabItem value="fast" label="Fast" className="margin-0">

_**Type -** Integer, **Domain -** Static_.  
The number of vertices in the X direction of the grid mesh that is lofted over the curves.
</TabItem>
<TabItem value="slow" label="Slow" className="margin-0">

_**Type -** Integer, **Domain -** [Group Index](#group-index)_.  
The number of vertices in the X direction of the grid mesh that is lofted over the curves, per [Group Index](#group-index).
</TabItem>  
</Tabs>

 Y is the direction pointing across multiple curves, so the X lines are parallel to the original [curves](#curve).
 
</div>

## Y Resolution
<div class="md-indent">

<Tabs className="buttons-none"  groupId="fast-slow">
<TabItem value="fast" label="Fast" className="margin-0">

_**Type -** Integer, **Domain -** Static_.  
The number of vertices in the Y direction of the grid mesh that is lofted over the curves. 
</TabItem>
<TabItem value="slow" label="Slow" className="margin-0">

_**Type -** Integer, **Domain -** [Group Index](#group-index)_.  
The number of vertices in the Y direction of the grid mesh that is lofted over the curves, per [Group Index](#group-index).
</TabItem>
</Tabs>

X is the direction pointing along the original [curves](#curve), so the X lines are pointing across multiple curves.

</div>

<Tabs className="buttons-none" groupId="fast-slow">

<TabItem value="fast" label="Fast" >

:::note
These values are [static](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/fields.html#:~:text=The%20socket%20requires%20a%20single%20real%20value%2C%20it%20cannot%20accept%20a%20field%20input.%20For%20output%20sockets%2C%20this%20means%20the%20node%20always%20outputs%20a%20single%20value.) so every grid patch you generate (by using the [Group Index](#group-index)) will all have the same resolution.
:::



</TabItem>
<TabItem value="slow" label="Slow">

:::info

These values are fields, so you can set a different resolution for each group of curves you loft over (set by the [Group Index](#group-index)).

:::
:::danger Important

Due to the way the grid is generated, and that is has to be merged this node is very slow (and some bugs currently).  
If you want it to work faster use the fast version of this node; Granted, you will lose the field resolution functionality.

:::
</TabItem>
</Tabs>


## X: Stick to Curve
<div class="md-indent">

_**Type -** Boolean, **Domain -** Spline_.  
- If **True** the generated topology will follow the [curve](#curve) topology **along each spline**; meaning the generated grid will have topology closer together were the [curve](#curve) has points closer together. This give an appearance or feeling of the mesh 'sticking' to the curve.  

- If **False** the generated topology will be evenly distributed along each spline. This give an appearance or feeling of the mesh 'sliding' along the curves.

</div>

## Y: Stick to Curve
<div class="md-indent">

_**Type -** Boolean, **Domain -** **(fix?)** Point_.  
- If **True** the generated topology will follow the [curve](#curve) topology **across the curves**; meaning the generated grid will have topology closer together were the [curve](#curve) are closer together. This give an appearance or feeling of the mesh 'sticking' to the curves.  

- If **False** the generated topology will be evenly distributed across the curves. This give an appearance or feeling of the mesh 'sliding' across the curves.

</div>

<ReactPlayer
url='/vid/docs/examples-curves/2023-02-18 22-35-14.mp4'
playing
autoplay
loop
width='100%'
height='100%'
style={{margin: '0 0 var(--ifm-paragraph-margin-bottom) 0'}}
/>


## X: Factor
<div class="md-indent">

_**Type -** Float, **Domain -** Point_.  
How much **along** the curves to loft over; starting from the startpoints to the endpoints, so 0 would be none, and 1 all the way.

</div>

## Y: Factor
<div class="md-indent">

_**Type -** Float, **Domain -** Point_.  
How much **across** the curves to loft over; starting from the fist curve to the last curve (set by the [Spline Order Weight](#spline-order-weight)), so 0 would be none, and 1 all the way.

</div>


## Spline Order Weight
<div class="md-indent">

_**Type -** Float, **Domain -** Spline_.  
In what order to loft across splines, set by weight (a float value). The lowest value is the first and highest is the last (this will still respect the [group index](#group-index)).   
This is extremely useful to loft over the curves properly without having to adhere to the spline index or need to set one. For example, you could use the `X` position to loft across all the splines in the `X` direction without any overlap.

</div>

## Offset Start Point
<div class="md-indent">

_**Type -** Integer, **Domain -** Spline_.  
Offset what the start spline will be for lofting across curves (which by default is the lowent index or lowest weight pr).

</div>

## Slide
<div class="md-indent">

_**Type -** Float, **Domain -** Spline_.  
Slides the generated topology along the spline. 1 = a full cycle.  
This could help get rid of unwanted twists or add ones when you want.

:::tip

You could use The _Curve Tilt_ or _Radius_ to set the slide if you are setting it manually; just make sure to set the whole spline to one value since it will interpolate it for the spline domain.

:::

</div>


## Group Index
<div class="md-indent">

 _**Type -** Integer, **Domain -** Spline_.   
Separate splines into different groups to loft over separately (separate grid patches), by ID.  
This way you only need to use one node even for multiple separate lofting.

</div>


## Interpolation:
<div class="md-indent">

 _**Type -** Integer, **Domain -** **(fix)** Spline_.  
 Set the interpolation / Falloff between [across] the splines.  
 (It's like setting the handle type in the other [ `Y` ] direction [across the curves instead of along the curve] .)

 0. Linear
 1. Catmull Rom
 2. NURBS
 3. Auto Handle

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

