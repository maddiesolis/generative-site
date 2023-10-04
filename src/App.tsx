import React from 'react';
import { PageLayout } from './layout/Layout';

/**
 * Concept
 *  - Site looks different every time it renders (load/refresh)
 *  - A piece of art is chosen
 *  - A piece of text (potentially some kind of poetry) is chosen
 *  - Colours, art piece, and font inform the text
 *  - Future: the website keeps changing slowly, so text, colours, image, etc. slowly morph
 * 
 * Vibes
 *  - Editorial
 *  - Contemporary
 *  - Potentially generative art (for now, just still images)
 *  - Randomization
 */

/**
 * Randomized attributes:
 * Layout?
 * Background colour
 * Primary text colour
 * Secondary text colour
 * Font family
 * Image
 * Text
 * */

/**
 * Constant components:
 * Title
 * Nav bar
 * Art piece
 * Text component
 */
function App() {
  return (
    <PageLayout/>
  );
}

export default App;
