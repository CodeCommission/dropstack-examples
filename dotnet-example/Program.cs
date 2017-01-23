using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace DotNetKestrelExample
{
    public class KestrelHelloWorld
    {
        public static void Main(string[] args)
        {
            new WebHostBuilder()
                .UseKestrel()
                .UseUrls("http://0.0.0.0:8080")
                .Configure(a => a.Run(c => c.Response.WriteAsync("Hello World!")))
                .Build()
                .Run();
        }
    }
}
