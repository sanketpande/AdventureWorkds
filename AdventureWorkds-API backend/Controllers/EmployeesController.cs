using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AdventureWorkds_API_backend;
using AutoMapper;
using AdventureWorkds_API_backend.Models;
using AdventureWorkds_API_backend.AuthService;
using Microsoft.AspNetCore.Authorization;

namespace AdventureWorkds_API_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly AdventureWorks2008R2Context _context;
        private readonly IMapper _mapper;
        private readonly IJwtAuth _jwtAuth;
        public EmployeesController(AdventureWorks2008R2Context context,IMapper mapper, IJwtAuth jwtAuth)
        {
            _mapper = mapper;
            _context = context;
            this._jwtAuth = jwtAuth;

        }

        // GET: api/Employees
        [HttpPost]
        [Route("GetEmployees")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees(GridOptionsParameter gridOptionsParameter)
        {
          if (_context.Employees == null)
          {
              return NotFound();
          }
            var data = await _context.Employees.OrderByDescending(x=>x.BusinessEntityId)
                             .Skip((gridOptionsParameter.PageNumber - 1) * gridOptionsParameter.PageSize)
                             .Take(gridOptionsParameter.PageSize)
                             .ToListAsync();
            return data;
        }

        // GET: api/Employees/5
        
        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<EmployeeVModel>> GetEmployee(int id)
        {
          
            var employee =await _context.Employees.Include(x => x.EmployeePayHistories)
                                                       .Include(x => x.BusinessEntity)
                                                       .Include(x => x.EmployeeDepartmentHistories)
                                                       .Include(x => x.PurchaseOrderHeaders)
                                                       .Include(x => x.JobCandidates)
                                                       .Where(x => x.BusinessEntityId == id).FirstOrDefaultAsync();

            if (employee == null)
            {
                return NotFound();
            }
            var employeeData = _mapper.Map<Employee, EmployeeVModel>(employee);

            return employeeData;
        }



        // PUT: api/Employees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Employee employee)
        {
            if (id != employee.BusinessEntityId)
            {
                return BadRequest();
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult<Login>> Login(Login login)
        {
            var token = _jwtAuth.Authentication(login.LoginID, login.Password);
            var employeeData = await _context.Employees.Include(x=>x.EmployeePayHistories)
                                                        .Include(x=>x.BusinessEntity)
                                                        .Include(x=>x.EmployeeDepartmentHistories)
                                                        .Include(x=>x.PurchaseOrderHeaders)
                                                        .Include(x=>x.JobCandidates)
                                                        .Where(x => x.LoginId == login.LoginID).FirstOrDefaultAsync();
            
            if (employeeData == null)
            {
                return Unauthorized();
            }
            else
            {

                 login.Token = token;
                login.BusinessEntityId = employeeData.BusinessEntityId.ToString();
                return login;
            }
            
        }

        // POST: api/Employees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("PostEmployee")]
        public async Task<ActionResult<EmployeeVModel>> PostEmployee(EmployeeVModel employee)
        {
          if (_context.Employees == null)
          {
              return Problem("Entity set 'AdventureWorks2008R2Context.Employees'  is null.");
          }
            var employeeData = _mapper.Map<EmployeeVModel,Employee >(employee);
            _context.Employees.Add(employeeData);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (EmployeeExists(employee.BusinessEntityId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployee", new { id = employee.BusinessEntityId }, employee);
        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            if (_context.Employees == null)
            {
                return NotFound();
            }
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeExists(int id)
        {
            return (_context.Employees?.Any(e => e.BusinessEntityId == id)).GetValueOrDefault();
        }
    }
}
