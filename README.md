# Monograph

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

Built With:
- Preact, Preact CLI
- Sass (specifically not css modules)
- ESLint
- Firefox

Must Haves:
- Add spells + spell information
  - Display critical info: without hiding behind hover/click
- Good UI/UX
- Autocomplete for spells
- Add spell save DC, modifier, and proficiency bonus
- Align all of the top row items
  - Currently all over the place. Doesn't look good
- Current level to declutter space if only on cantrips
  - Warning if trying to add spell that is above level

Must Haves Lite
- Move add to tome away from each spell and globally
- Click to use spell
- Reaction spells can be moved to top
- When a concentration spell is being used move that to top row 

Nice to Haves:
- Prioritization spell list with spells that begin with input

Maybes
- Notes sections for each spell. Users can input how they used each spell

References

Things Learned:
- ESLint

Notes:
- 1/25/2018 - Had to move a ton of things just to get single add to tome input. Measure twice, cut once!

Name Ideas
- Wonder Tome (wonderto.me)
