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
            var SERVICE_PORT = Environment.GetEnvironmentVariable("SERVICE_PORT");
            new WebHostBuilder()
                .UseKestrel()
                .UseUrls(String.IsNullOrEmpty(SERVICE_PORT) ? "http://0.0.0.0:5000" : $"http://0.0.0.0:{SERVICE_PORT}")
                .Configure(a => a.Run(c => c.Response.WriteAsync("Hello World!")))
                .Build()
                .Run();
        }
    }
}
