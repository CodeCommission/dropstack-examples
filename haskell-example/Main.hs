{-# LANGUAGE OverloadedStrings #-}

import Web.Scotty

main :: IO ()
main = scotty 80 $ do
  get "/:word" $ do
    beam <- param "word"
    html $ mconcat ["<h1>Dropstack, ", beam, " me up!</h1>"]
