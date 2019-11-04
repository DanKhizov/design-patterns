export interface CargoVehicle {
  moveToDeliveryPlace(): void;
  getVehicleType(): string;
}

export enum VehicleTypes {
  truck = "Truck",
  airplane = "Airplane"
}

export class Truck implements CargoVehicle {
  public getVehicleType(): string {
    return VehicleTypes.truck;
  }

  public moveToDeliveryPlace(): void {
    console.log("Truck is riding to the place of delivery");
  }
}

export class Airplane implements CargoVehicle {
  public getVehicleType(): string {
    return VehicleTypes.airplane;
  }

  public moveToDeliveryPlace(): void {
    console.log("Airplane is flying to the place of delivery");
  }
}
