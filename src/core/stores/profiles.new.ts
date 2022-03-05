export {};
// import {
//   ConfigurationKind,
//   ConfigurationSetDescription,
//   MeasurementSet,
// } from "../configurator-types";
// import { Profile } from "../profile-types";
// import { StateSlice } from "./utils";
// import { mockDevices } from "./devices";
//
// const armMeasurementSetDescription: ConfigurationSetDescription = {
//   id: 4478,
//   name: "Arm (Transradial)",
//   configurations: [
//     {
//       id: 44780,
//       name: "Arm Side",
//       description:
//         "Which side (from the person's perspective) are these measurements for?",
//       kind: ConfigurationKind.SingleOption,
//       options: {
//         left: "Left",
//         right: "Right",
//       },
//     },
//     {
//       id: 44781,
//       name: "Elbow can be Articulated",
//       description: "Can this person's elbow bend?",
//       kind: ConfigurationKind.Boolean,
//     },
//     {
//       id: 44782,
//       name: "Length from Elbow to Wrist",
//       kind: ConfigurationKind.Numeric,
//       units: "cm",
//     },
//     {
//       id: 44783,
//       name: "Elbow Circumference",
//       kind: ConfigurationKind.Numeric,
//       units: "cm",
//     },
//   ],
// };
//
// export const mockArm: MeasurementSet = {
//   id: 5883,
//   description: armMeasurementSetDescription,
//   createdAt: new Date(),
//   modifiedAt: new Date(),
//   configurations: [
//     {
//       id: 58830,
//       descriptionId: 44780,
//       value: "left",
//     },
//     {
//       id: 58831,
//       descriptionId: 44781,
//       value: "left",
//     },
//     {
//       id: 58832,
//       descriptionId: 44782,
//       value: "left",
//     },
//     {
//       id: 58833,
//       descriptionId: 44783,
//       value: "left",
//     },
//   ],
// };
// const mockProfiles = (): Profile[] => [
//   {
//     name: "Jacky Robinson",
//     profileId: "123",
//     profileImageUrl: "https://i.pravatar.cc/512?img=1",
//     location: "San Fransisco",
//     created: new Date(),
//
//     measurements: [mockArm],
//     options: [],
//   },
//   {
//     name: "Bigsby Smith",
//     profileId: "5627",
//     profileImageUrl: "https://i.pravatar.cc/512?img=2",
//     location: "San Fransisco",
//     created: new Date(),
//
//     measurements: [mockArm],
//     options: [],
//   },
//   {
//     name: "Bil Bless",
//     profileId: "1233",
//     profileImageUrl: "https://i.pravatar.cc/512?img=3",
//
//     created: new Date(),
//
//     measurements: [mockArm],
//     options: [],
//   },
//   {
//     name: "Hudson Lee",
//     profileId: "5647",
//     profileImageUrl: "https://i.pravatar.cc/512?img=4",
//     location: "San Fransisco",
//     created: new Date(),
//
//     measurements: [mockArm],
//     options: [],
//   },
//   {
//     name: "Alix Perez",
//     profileId: "1253",
//     profileImageUrl: "https://i.pravatar.cc/512?img=5",
//
//     created: new Date(),
//
//     measurements: [mockArm],
//     options: [],
//   },
//   {
//     name: "Greg Jones",
//     profileId: "5667",
//     profileImageUrl: "https://i.pravatar.cc/512?img=6",
//     location: "San Fransisco",
//     created: new Date(),
//
//     measurements: [mockArm],
//     options: [],
//   },
//   {
//     name: "DJ Derick",
//     profileId: "56657",
//     profileImageUrl: "https://i.pravatar.cc/512?img=5",
//     location: "San Fransisco",
//     created: new Date(),
//
//     measurements: [mockArm],
//     options: [],
//   },
// ];
//
// export type ProfileStore = {
//   profiles: Profile[];
// };
//
// export const createProfilesSlice: StateSlice<ProfileStore> = () => {
//   return {
//     profiles: mockProfiles(),
//   };
// };
