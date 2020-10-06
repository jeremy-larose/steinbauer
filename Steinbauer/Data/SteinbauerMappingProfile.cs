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
                .ForMember(v => v.VehicleId, ex => ex.MapFrom(v => v.Id))
                .ForMember(v => v.OwnerName, ex => ex.MapFrom(v => v.Name))
                .ForMember(v => v.EngineRunning, ex => ex.MapFrom(v => v.EngineRunning))
                .ForMember(v => v.Date, ex => ex.MapFrom(v => v.LastRan))
                .ForMember(v => v.FileName, ex => ex.MapFrom(v => v.ImageFile))
                .ForMember(v => v.VehicleType, ex => ex.MapFrom(v => v.VehicleType))
                .ForMember(v => v.Horsepower, ex => ex.MapFrom(v => v.Horsepower))
                .ForMember(v => v.Torque, ex => ex.MapFrom(v => v.Torque))
                .ReverseMap()
                .ForMember(v => v.Modifications, opt => opt.Ignore());


            CreateMap<Modification, ModificationViewModel>()
                .ForMember(m => m.ModificationId, ex => ex.MapFrom(m => m.ModId))
                .ForMember(m => m.ModificationName, ex => ex.MapFrom(m => m.ModName))
                .ForMember(m => m.Torque, ex => ex.MapFrom(m => m.Torque))
                .ForMember(m => m.Horsepower, ex => ex.MapFrom(m => m.Horsepower))
                .ReverseMap();
        }
    }
}