package entity;

public class User {
    String username;
    int password;
    String name;
    String email;
    String phone;
    String address;
    int age;
    String roles;

    public User() {

    }

    public User(
            String username,
            int password,
            String name,
            String email,
            String phone,
            String address,
            int age,
            String roles)
    {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.age = age;
        this.roles = roles;
    }

    public void setUsername(String username) {}
    public void setPassword(int password) {}
    public void setName(String name) {}
    public void setEmail(String email) {}
    public void setPhone(String phone) {}
    public void setAddress(String address) {}
    public void setAge(int age) {}
    public void setRoles(String roles) {}
    public String getUsername() {
        return username;
    }
    public int getPassword() {
        return password;
    }
    public String getName() {
        return name;
    }
    public String getEmail() {
        return email;
    }
    public String getPhone() {
        return phone;
    }
    public String getAddress() {
        return address;
    }
    public int getAge() {
        return age;
    }
    public String getRoles() {
        return roles;
    }

    @Override
    public String toString() {
        return  "username=" + username +
                ", password=" + password +
                ", name=" + name +
                ", email=" + email +
                ", phone=" + phone +
                ", address=" + address +
                ", age=" + age +
                ", roles=" + roles;
    }
}
