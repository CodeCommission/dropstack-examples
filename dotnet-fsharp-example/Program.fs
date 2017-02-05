open Suave
open Suave.Logging
open Suave.Filters
open Suave.Successful
open Suave.CORS
open Suave.Utils
open Suave.Operators
open Newtonsoft.Json

type CmdArgs = { IP: System.Net.IPAddress; Port: Sockets.Port }

type api = { message: string }

let logger = Targets.create Verbose [||]
let corsConfig = { defaultCORSConfig with allowedUris = InclusiveOption.All }

let app =
    choose [
        GET >=> path "/" >=> cors corsConfig >=> OK "(GET/TEXT) DROPSTACK Deploy with FSharp + Suave"
        GET >=> path "/api" >=> cors corsConfig >=> OK (JsonConvert.SerializeObject({ message = "(GET/JSON) DROPSTACK Deploy with FSharp + Suave" }))
        POST >=> path "/api" >=> cors corsConfig >=> OK (JsonConvert.SerializeObject({ message = "(POST/JSON) DROPSTACK Deploy with FSharp + Suave" }))
    ] >=> logStructured logger logFormatStructured


[<EntryPoint>]
let main argv =

    let args =
        let parse f str = match f str with (true, i) -> Some i | _ -> None

        let (|Port|_|) = parse System.UInt16.TryParse
        let (|IPAddress|_|) = parse System.Net.IPAddress.TryParse
        let defaultArgs = { IP = System.Net.IPAddress.Loopback; Port = 5000us }

        let rec parseArgs b args =
            match args with
            | [] -> b
            | "--ip" :: IPAddress ip :: xs -> parseArgs { b with IP = ip } xs
            | "--port" :: Port p :: xs -> parseArgs { b with Port = p } xs
            | invalidArgs ->
                printfn "error: invalid arguments %A" invalidArgs
                printfn "Usage:"
                printfn "    --ip ADDRESS   ip address (Default: %O)" defaultArgs.IP
                printfn "    --port PORT    port (Default: %i)" defaultArgs.Port
                exit 1

        argv |> List.ofArray |> parseArgs defaultArgs

    startWebServer { defaultConfig with bindings = [ HttpBinding.create HTTP args.IP args.Port ] } app

    0
