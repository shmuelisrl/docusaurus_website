---
sidebar_position: 4
title: Roll Up Splines
tags:
  - Cuve
  - Deformer
---
import ReactPlayer from 'react-player'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/roll_up_splines.png" alt="Smiley face" className="floatme"/>

 ### Roll Up Splines
  This node rolls up a curve from the start to the end, similar to trimming but rolling up the extra instead of removing it.
   
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>

# Inputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.
:::tip 

  Make sure your curves have enough topology [control points] to be able to be rolled up properly. 

:::
:::note
Only real topology can be effected, so a Bézier curves and the similar might not have enough topology. Using a [resample curve node](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/curve/resample_curve.html) set to Evaluated should make all topology real.
:::
</div>

## Selection
<div class="md-indent">

 _**Type -** Boolean, **Domain -** Point_.  
 What points will be effected by this node. (All indices will stay the same.)
</div>

## Factor
<div class="md-indent">

 _**Type -** Float, **Domain -** Point_.  
 The amount along the curve to roll up. 0 being none and 1 being the whole thong.

:::tip
 If you want to reverse the direction in which it's rolled to start from the end, use a [reverse curve node](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/curve/reverse_curve.html), so the end will become the beginning.
:::
</div>

## Radius Start from 0
<div class="md-indent">

_**Type -** Boolean, **Domain -** Spline_.  
Whether to have a fixed [radius](#radius) size, or to have a realistic roll effect where it grows as it rolls. (everything will compensate accordingly)
</div>

## Radius
<div class="md-indent">

_**Type -** Float, **Domain -** Point_. 
<Tabs>
  <TabItem value="1" label="False">

The **constant** radius of the rolled-up part of the curve, in meters. If negative, will invert what side (relative to the tangent normal) it's rolled **on** *(- not from)*.

  </TabItem>
  <TabItem value="2" label="Radius Start from 0" default>

The radius of the rolled-up part of the curve **when the [Factor](#factor) is at 1**, in meters. If negative, will invert what side (relative to the tangent normal) it's rolled **on** *(- not from)*.

  </TabItem>
</Tabs>
</div>

## Clamp Radius
<div class="md-indent">

_**Type -** Boolean, **Domain -** Spline_.  
Clamps the radius according to the [relative radius](#relative-radius). - This is useful mainly when using [Radius Start from 0](#radius-start-from-0) and prevents certain artifacts.
</div>

## Radius Inset
<div class="md-indent">

_**Type -** Float, **Domain -** Point_.  
How far into the center radius of the spiral to goes; 1 being all the way, and 0 being none (- 0 would also result in a [Relative Radius](#radius-inset) of 0).
<ReactPlayer 
  playing 
  autoplay 
  loop 
  width = '200px' 
  height = '200px' 
  style={{borderRadius: ' var(--ifm-alert-border-radius)', overflow: 'hidden',margin: '0 0 var(--ifm-spacing-vertical) 0'}}
  url='/vid/docs/roll_up_spines_radius_inset.mp4' 
/>
</div>

## Roll
<div class="md-indent">

 _**Type -** Float, **Domain -** Point_.  
How many rotations there are *when the factor is at 1*. If negative, will invert what side (relative to the tangent normal) it's rolled **on** *(- not from)*.
</div>

## Radius / Diameter
<div class="md-indent">

_**Type -** Boolean, **Domain -** Spline_.
This will change the [Relative Radius](#relative-radius) between using the radius or diameter. - This is useful if you are solidifying it instead of using a curve to mesh with a 3d profile, or the like. - this also effects the [Clamp Radius](#clamp-radius) [since that uses the [Relative Radius](#relative-radius)].
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

## Roll Factor
<div class="md-indent">

 _**Type -** Float, **Domain -** Point_.  
A 0 to 1 value across the rolled part of the curve.
</div>

## Relative Radius
<div class="md-indent">

 _**Type -** Float, **Domain -** Point_.  
Based on the [radius](#radius), [Radius Inset](#radius-inset), and [Roll Amount](#roll) gives you the proper radius so that the curve fits the roll and isn't too small nor overflows. This value will change according to the [Radius / Diameter](#radius--diameter) selection.

</div>

## Is Rolled
<div class="md-indent">

 _**Type -** Boolean, **Domain -** Point_.  
A selection of what part of the curve is rolled up. 
</div>

</div>
