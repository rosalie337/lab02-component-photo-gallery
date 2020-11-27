# LAB 02: Horned Creatures Gallery with Filter
===

Create a photo gallery app.

## Image Data

Use the supplied images data file at `data.js`

## Component Tree

- `App`
    - `Header`
    - `ImageList (stretch)` (with a select dropdown)
        - [`ImageItem`]

## 1. Build Out Basic App Structure

- `App.js` - top level component. App.js imports the horned creatures data and passes it to `ImageList (stretch).js`
- `Header.js` - header component
- `ImageList (stretch).js` - image list component
    - `ImageItem.js` - image item component

Build out basic tree of app, starting at top and working down. The `App` component should introduce the image list data, passing as a prop to `ImageList (stretch)`. 

Initially, `ImageList (stretch)` component can just show count of images so you know it is receiving the data via props.

**Time to git ACP!**

## 3. Create `ImageItem` Children in `ImageList`

- `ImageList.js`

Map over `this.props.images` and create/render and `ImageItem` for each image in the array.

**Time to git ACP!**

## 4. Filter Images

- `App.js`

In the `render` method of `App.js`, filter through the image data, based on the current state of a dropdown. This dropdown allows users to filter by keyword.

**Time to git ACP!**

## STRETCH: Add second filter for number of horns.

This state will need to be tracked separately. Add more data points and more filters for more, more, more points (up to 3)

## STRETCH: Derive Keywords from Data

When filtering, derive unique keywords from the data and use that to create the `select` `options` using a `.map` operation on the unique list of keywords. (hint: `Object.keys` will give you a list of all the keys).

**Time to git ACP!**

---

## Points Break Down

Looking For | Points (10)
:--|--:
[x] `App` and `Header` components, nicely styled | 2
[x] Use `.map` to render out a list of `ImageItem` components, nicely styled | 3
[x] Working filter with dropdown that filters horned creatures by keyword | 5
[ ] More filters | +1 each
[x] `ImageList` component, nicely styled that takes in `images` as a prop | +1
[x] Derive keyword from data | +1