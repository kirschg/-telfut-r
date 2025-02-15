using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using VizsgaremekAPI;

namespace EtelfutarAPI
{
    public class AuthenticationMiddleware
    {

        private readonly RequestDelegate _next;

        public AuthenticationMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            Endpoint? endpoint = context.GetEndpoint();

            if(endpoint != null && endpoint.Metadata.Any(x => x is CustomAuthorizeAttribute))
            {
                string? auth = context.Request.Headers.Authorization;

                if(string.IsNullOrEmpty(auth) || !auth.StartsWith("Bearer"))
                {
                    context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                    return;
                }

                string token = auth.Replace("Bearer ", "");

                if (!Program.LoggedInUsers.ContainsKey(token))
                {
                    context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                    return;
                }
            }
            await _next(context);
        }
    }
}
