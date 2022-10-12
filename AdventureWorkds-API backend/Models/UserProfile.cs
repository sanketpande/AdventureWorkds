using AutoMapper;

namespace AdventureWorkds_API_backend.Models
{
    public class UserProfile:Profile
    {
      public  UserProfile()
        {
            CreateMap<Employee, EmployeeVModel>()
                .ForMember(dest => dest.EmployeePayHistories, src => src.MapFrom(src => src.EmployeePayHistories))
                .ForMember(dest => dest.EmployeeDepartmentHistories, src => src.MapFrom(src => src.EmployeeDepartmentHistories))
                .ForMember(dest => dest.JobCandidates, src => src.MapFrom(src => src.JobCandidates))
                .ForMember(dest => dest.PurchaseOrderHeaders, src => src.MapFrom(src => src.PurchaseOrderHeaders))
             .ForMember(dest => dest.BusinessEntity, src => src.MapFrom(src => src.BusinessEntity));
            CreateMap<EmployeePayHistory, EmployeePayHistoryVModel>();
            CreateMap<EmployeeDepartmentHistory, EmployeeDepartmentHistoryVModel>();
            CreateMap<JobCandidate, JobCandidateVModel>();
            CreateMap<PurchaseOrderDetail, PurchaseOrderHeaderVModel>();
            CreateMap<Person, PersonVModel>();

            CreateMap<EmployeeVModel, Employee>()
                .ForMember(dest => dest.EmployeePayHistories, src => src.MapFrom(src => src.EmployeePayHistories))
                .ForMember(dest => dest.EmployeeDepartmentHistories, src => src.MapFrom(src => src.EmployeeDepartmentHistories))
                .ForMember(dest => dest.JobCandidates, src => src.MapFrom(src => src.JobCandidates))
                .ForMember(dest => dest.PurchaseOrderHeaders, src => src.MapFrom(src => src.PurchaseOrderHeaders))
             .ForMember(dest => dest.BusinessEntity, src => src.MapFrom(src => src.BusinessEntity));
            CreateMap<EmployeePayHistoryVModel, EmployeePayHistoryVModel>();
            CreateMap<EmployeeDepartmentHistoryVModel, EmployeeDepartmentHistoryVModel>();
            CreateMap<EmployeeDepartmentHistoryVModel, JobCandidateVModel>();
            CreateMap<PurchaseOrderHeaderVModel, PurchaseOrderDetail>();
            CreateMap<PersonVModel,Person >();

        }
        
    }
}
