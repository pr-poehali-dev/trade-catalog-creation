import { LucideIcon } from "lucide-react";
import {
  Package,
  Phone,
  ShoppingCart,
  Catalog,
  Calculator,
  Truck,
  Shield,
  Users,
  Clock,
  Search,
  Mail,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  CircleAlert,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Package,
  Phone,
  ShoppingCart,
  Catalog: Package,
  Calculator,
  Truck,
  Shield,
  Users,
  Clock,
  Search,
  Mail,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  CircleAlert,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
