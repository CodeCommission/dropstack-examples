module Main where

import Control.Monad.Eff (Eff)
import Data.Array (replicate)
import Data.Traversable (traverse_)
import Prelude hiding (div)
import Pux (CoreEffects, EffModel, start)
import Pux.DOM.Events (onClick)
import Pux.DOM.HTML (HTML)
import Pux.Renderer.React (renderToDOM)
import Text.Smolder.HTML (button, div, span, h1)
import Text.Smolder.HTML.Attributes (className)
import Text.Smolder.Markup (text, (!), (#!))

data Event = ThumbUp

type State = Int

-- | Return a new state (and effects) from each event
foldp :: ∀ fx. Event -> State -> EffModel State Event fx
foldp ThumbUp n = { state: n + 1, effects: [] }

-- | Return markup from the state
view :: State -> HTML Event
view count =
  div do
    div $
      h1 $ text "PureScript on Dropstack!"
    div $ 
      button ! className "btn btn-primary" #! onClick (const ThumbUp) $ viewThumbUp
    div $ 
      traverse_ id (replicate count viewThumbUp)

viewThumbUp :: HTML Event
viewThumbUp = span ! className "glyphicon glyphicon-thumbs-up" $ text ""

-- | Start and render the app
main :: ∀ fx. Eff (CoreEffects fx) Unit
main = do
  app <- start
    { initialState: 0
    , view
    , foldp
    , inputs: []
    }

  renderToDOM "#app" app.markup app.input