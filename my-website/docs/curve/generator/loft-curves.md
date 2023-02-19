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
<TabItem value="fast" label="Fast">
</TabItem>
<TabItem value="slow" label="Slow">
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
controls
autoplay
loop
width='100%'
height='100%'
// style={{borderRadius: ' var(--ifm-alert-border-radius)', overflow: 'hidden',margin: '0 0 var(--ifm-spacing-vertical) 0'}}
/>


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

