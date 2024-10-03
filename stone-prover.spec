Name:           stone-prover
Version:        %{version}
Release:        1%{?dist}
Summary:        Stone Prover for Fedora

License:        MIT
URL:            https://github.com/yourusername/stone-prover

%description
Stone Prover package for Fedora

%prep
# No prep needed for binary-only packages

%install
mkdir -p %{buildroot}%{_bindir}
install -m 755 %{_sourcedir}/cpu_air_prover %{buildroot}%{_bindir}/cpu_air_prover
install -m 755 %{_sourcedir}/cpu_air_verifier %{buildroot}%{_bindir}/cpu_air_verifier

%files
%{_bindir}/cpu_air_prover
%{_bindir}/cpu_air_verifier

%changelog
* Wed Oct 4 2023 Your Name <your.email@example.com> - %{version}-1
- Initial RPM release