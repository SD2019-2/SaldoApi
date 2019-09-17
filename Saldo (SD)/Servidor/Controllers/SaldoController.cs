using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CreditoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaldoController : ControllerBase
    {
        static int SaldoTotal;

        // GET api/saldo/GetSaldo
        [HttpGet]
        [Route("[action]")]
        public string GetSaldo() => "Nenhum Valor informado";

        //GET api/saldo/GetSaldo/valor
        [HttpGet]
        [Route("[action]/{saldo}")]
        public string GetSaldo(int saldo)
        {
            if (saldo.GetType() != typeof(int) || saldo < 0) return "Valor informado invalido!";
            if (saldo < 200) return $"Saldo de {saldo} sem nenhum credito";
            if (saldo > 200 && saldo < 400) return $"Saldo de {saldo * 1.2} com credito de 20%";
            if (saldo > 400 && saldo < 600) return $"Saldo de {saldo * 1.3} com credito de 30%";
            if (saldo > 600) return $"Saldo de {saldo * 1.4} com credito de 40%";

            return "Duvido vc chegar aqui!";
        }

        //GET api/saldo/GetTotal
        [HttpGet]
        [Route("[action]")]
        public string  GetTotal() => $"Valor do saldo total: {SaldoTotal}";

        //POST api/saldo/EnviarTotal/valor
        [HttpPost]
        [Route("[action]/{valor}")]
        public void EnviarTotal(int valor)
        {
            SaldoTotal += valor;
        }

        //POST api/saldo/SacarTotal/valor
        [HttpPost]
        [Route("[action]/{valor}")]
        public void SacarTotal(int valor)
        {
            SaldoTotal -= valor;
        }
    }
}
