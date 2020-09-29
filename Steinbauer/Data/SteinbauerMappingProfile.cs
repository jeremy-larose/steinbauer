using AutoMapper;
using Steinbauer.Data.Entities;
using Steinbauer.ViewModels;

namespace Steinbauer.Data
{
    public class SteinbauerMappingProfile : Profile
    {
        public SteinbauerMappingProfile()
        {
            CreateMap<Vehicle, VehicleViewModel>()
                .ForMember( v=>v.VehicleId, ex => ex.MapFrom( v => v.Id ))
                .ForMember( v=>v.OwnerName, ex => ex.MapFrom( v=>v.Name))
                .ForMember( v=>v.Date, ex => ex.MapFrom( v=>v.LastRan ))
                .ForMember( v => v.FileName, ex => ex.MapFrom( v => v.ImageFile ))
                .ForMember( v=>v.VehicleType, ex => ex.MapFrom( v=>v.VehicleType ))
                .ReverseMap();

            CreateMap<Modification, ModificationViewModel>()
                .ForMember(m => m.ModificationId, ex => ex.MapFrom(m => m.Id))
                .ForMember(m => m.ModificationName, ex => ex.MapFrom(m => m.ModName))
                .ReverseMap();
        }
    }
}